<?php
namespace MVSB\MyVirtualStoryBookBundle\Service;

use MVSB\MyVirtualStoryBookBundle\Repository\PlayerRepository;
use MVSB\MyVirtualStoryBookBundle\Builder\BookBuilder;
use MVSB\MyVirtualStoryBookBundle\Entity\Player;

class PlayerService{
    
    private $playerRepository;
    private $bookBuilder;

    public function __construct(PlayerRepository $playerRepository, BookBuilder $bookBuilder){
        $this->playerRepository = $playerRepository;
        $this->bookBuilder = $bookBuilder;
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
    
    public function createNewBook($username){
        $player = $this->playerRepository->findOneByUsername($username);
        $playerBooks = $player->getBooks();
        $playerBooks[] = $this->bookBuilder->createNewBook($player);
        $this->playerRepository->flushEntityToBase($player);
        return $player;
    }

}