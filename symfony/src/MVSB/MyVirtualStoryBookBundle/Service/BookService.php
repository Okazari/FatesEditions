<?php
namespace MVSB\MyVirtualStoryBookBundle\Service;

use MVSB\MyVirtualStoryBookBundle\Repository\BookRepository;
use MVSB\MyVirtualStoryBookBundle\Entity\Book;

class BookService{
    
    private $bookRepository;

    public function __construct(BookRepository $bookRepository){
        $this->bookRepository = $bookRepository;
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
}