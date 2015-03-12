<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;

class PlayersController extends Controller
{
    /**
     * @Get("/players")
     */
    public function indexAction()
    {
        return new Response("coucou");
    }
}
