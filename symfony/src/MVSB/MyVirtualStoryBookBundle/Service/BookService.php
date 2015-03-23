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
    
    public function updateBook($id, $properties){
        $book = $this->bookRepository->findOneById($id);
        
        if(isset($properties->name)) $book->setName($properties->name);
        if(isset($properties->cover)) $book->setCover($properties->cover);
        if(isset($properties->synopsis)) $book->setSynopsis($properties->synopsis);
        if(isset($properties->draft)) $book->setDraft($properties->draft);
        if(isset($properties->genre) && isset($properties->genre->id)) $book->setGenre($this->genreRepository->findOneById($properties->genre->id));
        
        $this->bookRepository->flushEntityToBase($book);
        return $book;
    }
    
    public function addPage($id,$page){
        $book = $this->bookRepository->findOneById($id);
        $page->setBook($book);
        $pages = $book->getPages();
        $pages[] = $page;
        return $this->bookRepository->flushEntityToBase($book);
    }
    
    public function publishBook($id){
        $bookToPublish = $this->bookRepository->findOneById($id);
        $publication = clone $bookToPublish;
        $publication->setDraft(false);
        return $this->bookRepository->addEntityToBase($publication);
    }
    
}