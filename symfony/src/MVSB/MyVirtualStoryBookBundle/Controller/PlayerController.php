<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use MVSB\MyVirtualStoryBookBundle\Security\MVSBToken;
class PlayerController extends MVSBController
{
    /**
     * @Post("/players")
     */
    public function createPlayerAction(Request $request)
    {
        $serializer = $this->get('jms_serializer');
        $playerService = $this->get('mvsb.player.service');
        
        $json = $request->getContent();
        $player = $serializer->deserialize($json, 'MVSB\MyVirtualStoryBookBundle\Entity\Player', 'json');
        
        $playerService->addNewPlayer($player);
        
        return new Response('',Response::HTTP_NO_CONTENT);
    }
    
    /**
     * @Get("/players/{username}")
     */
    public function getPlayerByNameAction(Request $request, $username)
    {
        $playerService = $this->get('mvsb.player.service');
        $player = $playerService->getPlayerByUsername($username);

        return $this->serializeAndBuildSONResponse($player,Response::HTTP_OK);
    }
    
    /**
     * @Get("/players/{username}/books")
     */
    public function getPlayerDraftAction(Request $request, $username)
    {
        $playerService = $this->get('mvsb.player.service');
        $books = $playerService->getPlayerBooks($username);

        return $this->serializeAndBuildSONResponse($books,Response::HTTP_OK);
    }
    
    /**
     * @Post("/players/{username}/books")
     */
    public function createNewBookAction(Request $request, $username)
    {
        $playerService = $this->get('mvsb.player.service');
        $player = $playerService->createNewBook($username);

        return $this->serializeAndBuildSONResponse($player,Response::HTTP_CREATED);
    }
 
    /**
     * @Post("/players/{username}/games")
     */
    public function createNewGameAction(Request $request, $username)
    {
        $playerService = $this->get('mvsb.player.service');
        
        $json = $request->getContent();
        $properties = json_decode($json);
        
        if(isset($properties->bookId)) $game = $playerService->createNewGame($username, $properties->bookId);
        

        return $this->serializeAndBuildSONResponse($game,Response::HTTP_CREATED);
    }
    
    /**
     * @Get("/players/{username}/games")
     */
    public function getPlayerGamesAction(Request $request, $username)
    {
        $playerService = $this->get('mvsb.player.service');
        $games = $playerService->getPlayerGames($username);

        return $this->serializeAndBuildSONResponse($games,Response::HTTP_OK);
    }
    
}
