<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Patch;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class PageController extends MVSBController
{
    
    /**
     * @Delete("/pages/{id}")
     */
    public function deletePageAction(Request $request, $id)
    {
        $this->logRoute($request);
        $pageService = $this->get('mvsb.page.service');
        $pageService->deletePage($id);
     
        return new Response('',Response::HTTP_NO_CONTENT);   
    }
    
    /**
     * @Get("/pages/{id}")
     */
    public function getPageAction(Request $request, $id)
    {
        $this->logRoute($request);
        $pageService = $this->get('mvsb.page.service');
        $page = $pageService->getPageById($id);

        return $this->serializeAndBuildSONResponse($page,Response::HTTP_OK); 
    }
    
    /**
     * @Patch("/pages/{id}")
     */
    public function putPageByIdAction(Request $request, $id)
    {
        $this->logRoute($request);
        $serializer = $this->get('jms_serializer');
        $pageService = $this->get('mvsb.page.service');
        
        $json = $request->getContent();
        $pageFromJson = $serializer->deserialize($json, "MVSB\MyVirtualStoryBookBundle\Entity\Page", "json");
        $book = $pageService->updatePage($id,$pageFromJson);
        
        return new Response('',Response::HTTP_OK);
    }
    
    /**
     * @Post("/pages/{id}/transitions")
     */
    public function addNewTransitionAction(Request $request, $id)
    {
        $this->logRoute($request);
        $pageService = $this->get('mvsb.page.service');
        $pageService->addTransition($id);
     
        return new Response('',Response::HTTP_NO_CONTENT);   
    }
    
    /**
     * @Get("/pages/{id}/transitions")
     */
    public function getPageTransitionsAction(Request $request, $id)
    {
        $this->logRoute($request);
        $pageService = $this->get('mvsb.page.service');
        $page = $pageService->getPageById($id);
     
        return $this->serializeAndBuildSONResponse($page->getTransitions(),Response::HTTP_OK); 
    }
    
    /**
     * @Delete("/transitions/{id}")
     */
    public function deleteTransitionAction(Request $request, $id)
    {
        $this->logRoute($request);
        $pageService = $this->get('mvsb.page.service');
        $pageService->deleteTransition($id);
     
        return new Response('',Response::HTTP_NO_CONTENT);   
    }
}
