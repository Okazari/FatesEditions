<?php

namespace MVSB\MyVirtualStoryBookBundle\Security;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\Security\Http\Firewall\ListenerInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface;
use MVSB\MyVirtualStoryBookBundle\Security\MVSBToken;
use MVSB\MyVirtualStoryBookBundle\Entity\Player;
use Symfony\Component\Security\Http\HttpUtils;

class MVSBListener implements ListenerInterface
{
    protected $securityContext;
    protected $authenticationManager;
    protected $httpUtils;

    public function __construct(SecurityContextInterface $securityContext, AuthenticationManagerInterface $authenticationManager,HttpUtils $httpUtils)
    {
        $this->securityContext = $securityContext;
        $this->authenticationManager = $authenticationManager;
        $this->httpUtils = $httpUtils;
    }

    public function handle(GetResponseEvent $event)
    {
        $request = $event->getRequest();
        $targetUrlLogin = '/login';
        $targetUrlLogout = '/logout';
        if ($this->httpUtils->checkRequestPath($request, $targetUrlLogin)) {
            $token = new MVSBToken();
            $json = $request->getContent();
            $params = json_decode($json);
            if(!isset($params->username) || !isset($params->password)){
                $event->setResponse(new Response("",Response::HTTP_BAD_REQUEST));
                return;
            }
            $user = new Player();
            $user->setUsername($params->username)
                 ->setPassword($params->password);
            $token->setUser($user);
            $authenticatedToken = $this->authenticationManager->authenticate($token);
            if($authenticatedToken->isAuthenticated() === false){
                $event->setResponse(new Response("",Response::HTTP_BAD_REQUEST));
                return;
            }
            $this->securityContext->setToken($authenticatedToken);
            $event->setResponse(new Response("",Response::HTTP_OK));
        }else if($this->httpUtils->checkRequestPath($request, $targetUrlLogout)){
            $token = $this->securityContext->setToken(null);
            $event->setResponse(new Response("",Response::HTTP_OK));
        }else if($this->securityContext->getToken() === null){
            $event->setResponse(new Response("",Response::HTTP_UNAUTHORIZED));
        }
    }
}