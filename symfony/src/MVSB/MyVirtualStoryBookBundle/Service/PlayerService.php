<?php
namespace MVSB\MyVirtualStoryBookBundle\Service;

use MVSB\MyVirtualStoryBookBundle\Repository\PlayerRepository;
use MVSB\MyVirtualStoryBookBundle\Entity\Player;

class PlayerService{
    
    private $playerRepository;

    public function __construct(PlayerRepository $playerRepository){
        $this->playerRepository = $playerRepository;
    }

    public function addNewPlayer(Player $player){
        $this->playerRepository->addPlayerToBase($player);
    }

    public function getByPlayerByUsername($username){
        return $this->playerRepository->findOneByUsername($username);
    }

}