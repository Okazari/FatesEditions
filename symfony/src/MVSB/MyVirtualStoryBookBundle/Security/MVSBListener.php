<?php

namespace MVSB\MyVirtualStoryBookBundle\Security;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\Security\Http\Firewall\ListenerInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface;
use MVSB\MyVirtualStoryBookBundle\Security\MVSBToken;
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
            $authenticatedToken = $this->authenticationManager->authenticate($token);
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