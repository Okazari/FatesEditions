<?php
namespace MVSB\MyVirtualStoryBookBundle\Service;

use MVSB\MyVirtualStoryBookBundle\Repository\BookRepository;
use MVSB\MyVirtualStoryBookBundle\Repository\GenreRepository;
use MVSB\MyVirtualStoryBookBundle\Entity\Book;

class BookService{
    
    private $bookRepository;
    private $genreRepository;

    public function __construct(BookRepository $bookRepository, GenreRepository $genreRepository){
        $this->bookRepository = $bookRepository;
        $this->genreRepository = $genreRepository;
    }

    public function addNewBook(Book $book){
        $this->bookRepository->addEntityToBase($book);
    }

    public function getBookById($id){
        return $this->bookRepository->findOneById($id);
    }

    public function getPublishedBooks(){
        return $this->bookRepository->findByDraft(false);
    }
    
    public function deleteBookById($id){
        $book = $this->bookRepository->findOneById($id);
        $this->bookRepository->removeEntityFromBase($book);
    }
    
    public function getAllBookGenres(){
        return $genres = $this->genreRepository->findAll();
    }
}