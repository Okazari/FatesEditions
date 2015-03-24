<?php

namespace MVSB\MyVirtualStoryBookBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Get;
use JMS\Serializer\SerializationContext;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class MVSBController extends Controller
{
    
    protected function serializeAndBuildSONResponse($entity,$statusCode){
        
        $serializer = $this->get('jms_serializer');
        $json = $serializer->serialize($entity, 'json', SerializationContext::create()->enableMaxDepthChecks());
        $response = new Response($json,$statusCode,array('content-type' => 'application/json'));
        return $response;
        
    }
    
}
