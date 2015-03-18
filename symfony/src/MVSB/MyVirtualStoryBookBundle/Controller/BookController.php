<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class BookController extends MVSBController
{
    /**
     * @Post("/books")
     */
    public function createBookAction(Request $request)
    {
        $serializer = $this->get('jms_serializer');
        $bookService = $this->get('mvsb.book.service');
        
        
        $json = $request->getContent();
        $book = $serializer->deserialize($json, 'MVSB\MyVirtualStoryBookBundle\Entity\Book', 'json');
        
        $bookService->addNewBook($book);
        
        return new Response('',Response::HTTP_NO_CONTENT);
    }
    
    /**
     * @Get("/books/{id}")
     */
    public function getBookByIdAction(Request $request, $id)
    {
        $bookService = $this->get('mvsb.book.service');
        $book = $bookService->getBookById($id);

        return $this->serializeAndBuildSONResponse($book,Response::HTTP_OK);
    }
    
    /**
     * @Delete("/books/{id}")
     */
    public function deleteBookByIdAction(Request $request, $id)
    {
        $bookService = $this->get('mvsb.book.service');
        $bookService->deleteBookById($id);

        return new Response('',Response::HTTP_NO_CONTENT);
    }
    
    /**
     * @Get("/books")
     */
    public function getPublishedBooksAction(Request $request)
    {
        $bookService = $this->get('mvsb.book.service');
        $books = $bookService->getPublishedBooks();

        return $this->serializeAndBuildSONResponse($books,Response::HTTP_OK);
    }
    
}
