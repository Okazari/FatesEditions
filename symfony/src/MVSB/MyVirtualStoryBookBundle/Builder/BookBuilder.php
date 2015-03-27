<?php
namespace MVSB\MyVirtualStoryBookBundle\Builder;

use MVSB\MyVirtualStoryBookBundle\Entity\Book;

class BookBuilder{
    
    public function createNewBook($author){
        $book = new Book();
        $book->setName("")
             ->setSynopsis("")
             ->setCover("http://colorlava.com/wp-content/uploads/2012/11/Classic-Red-Book-Cover-520x760.jpg")
             ->setAuthor($author)
             ->setDraft(true);
             return $book;
    }
    
}