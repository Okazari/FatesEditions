<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class PlayersController extends Controller
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
        
        return new Response("coucou");
    }
    
    /**
     * @Get("/players/{username}")
     */
    public function getPlayerByNameAction(Request $request, $username)
    {
        $serializer = $this->get('jms_serializer');
        $playerService = $this->get('mvsb.player.service');
        
        $player = $playerService->getByPlayerByUsername($username);
        
        $jsonResponse = $serializer->serialize($player, 'json');

        return new Response($jsonResponse);
    }
}
