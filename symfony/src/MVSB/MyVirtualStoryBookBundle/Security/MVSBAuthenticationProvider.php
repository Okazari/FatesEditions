<?php

namespace MVSB\MyVirtualStoryBookBundle\Security;

use Symfony\Component\Security\Core\Authentication\Provider\AuthenticationProviderInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\NonceExpiredException;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class MVSBAuthenticationProvider implements AuthenticationProviderInterface
{
    private $userProvider;

    public function __construct($userProvider)
    {
        $this->userProvider = $userProvider;
    }

    public function authenticate(TokenInterface $token)
    {
        $user = $this->userProvider->loadUserByUsername("Teijiro");
        $token->setUser($user);
        return $token;
        if ($user && $user->getPassword() === $token->getPassword()) {
            $token->setAuthenticated(true);
            $token->setUser($user);
            return $token;
        }

        throw new AuthenticationException('Bad credentials');
    }


    public function supports(TokenInterface $token)
    {
        return $token instanceof MVSBToken;
    }
    
}