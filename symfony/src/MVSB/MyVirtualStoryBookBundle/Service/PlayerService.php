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
        $this->playerRepository->addEntityToBase($player);
    }

    public function getPlayerByUsername($username){
        return $this->playerRepository->findOneByUsername($username);
    }

    public function getPlayerBooks($username){
        $player = $this->playerRepository->findOneByUsername($username);
        return $player->getBooks();
    }

}