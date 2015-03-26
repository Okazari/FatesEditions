<?php

namespace MVSB\MyVirtualStoryBookBundle\Security;

use Symfony\Component\Security\Core\Authentication\Token\AbstractToken;

class MVSBToken extends AbstractToken
{
    private $player;

    public function __construct(array $roles = array())
    {
        parent::__construct($roles);
    }

    public function getCredentials()
    {
        return '';
    }
    
    public function setPlayer($player){
        $this->player = $player;
        return $this;
    }
    
    public function getPlayer(){
        return $this->player;
    }
    
}