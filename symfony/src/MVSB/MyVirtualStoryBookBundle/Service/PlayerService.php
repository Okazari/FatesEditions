<?php
namespace MVSB\MyVirtualStoryBookBundle\Service;

use MVSB\MyVirtualStoryBookBundle\Repository\PlayerRepository;
use MVSB\MyVirtualStoryBookBundle\Repository\BookRepository;
use MVSB\MyVirtualStoryBookBundle\Builder\BookBuilder;
use MVSB\MyVirtualStoryBookBundle\Entity\Player;
use MVSB\MyVirtualStoryBookBundle\Entity\Game;

class PlayerService{
    
    private $playerRepository;
    private $bookRepository;
    private $bookBuilder;

    public function __construct(PlayerRepository $playerRepository, BookRepository $bookRepository, BookBuilder $bookBuilder){
        $this->playerRepository = $playerRepository;
        $this->bookRepository = $bookRepository;
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
    
    public function getPlayerGames($username){
        $player = $this->playerRepository->findOneByUsername($username);
        return $player->getGames();
    }
    
    public function createNewBook($username){
        $player = $this->playerRepository->findOneByUsername($username);
        $playerBooks = $player->getBooks();
        $book = $this->bookBuilder->createNewBook($player);
        $playerBooks[] = $book;
        $this->playerRepository->flushEntityToBase($player);
        return $book;
    }
    
    public function createNewGame($username, $bookId){
        $player = $this->playerRepository->findOneByUsername($username);
        $book = $this->bookRepository->findOneById($bookId);
        $playerGames = $player->getGames();
        $game = new Game();
        $game->setPlayer($player);
        $game->setBook($book);
        $game->setCurrentPage($book->getStartingPage());
        $playerGames[] = $game;
        $this->playerRepository->flushEntityToBase($player);
        return $game;
    }

}