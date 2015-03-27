<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Patch;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class GameController extends MVSBController
{
    /**
     * @get("/games/{id}")
     */
    public function getGameByIdAction(Request $request, $id)
    {
        $serializer = $this->get('jms_serializer');
        $gameRepository = $this->get('mvsb.game.repository');
        $game = $gameRepository->findOneById($id);
        
        return $this->serializeAndBuildSONResponse($game,Response::HTTP_OK);
    }
    
    /**
     * @Patch("/games/{id}")
     */
    public function patchGameByIdAction(Request $request, $id)
    {
        $serializer = $this->get('jms_serializer');
        $gameRepository = $this->get('mvsb.game.repository');
        $pageRepository = $this->get('mvsb.page.repository');
        $game = $gameRepository->findOneById($id);
        
        $json = $request->getContent();
        $properties = json_decode($json);
        
        if((null !== $properties->currentPage) && (null !== $properties->currentPage->id)) {
            $page = $pageRepository->findOneById($properties->currentPage->id);
            $game->setCurrentPage($page);
        }
        $gameRepository->flushEntityToBase($game);
        
        return new Response('',Response::HTTP_OK);
    }
    
    /**
     * @Delete("/games/{id}")
     */
    public function deleteGameByIdAction(Request $request, $id)
    {
        $gameRepository = $this->get('mvsb.game.repository');
        $game = $gameRepository->findOneById($id);

        $gameRepository->removeEntityFromBase($game);
        
        return new Response('',Response::HTTP_NO_CONTENT);
    }
}
