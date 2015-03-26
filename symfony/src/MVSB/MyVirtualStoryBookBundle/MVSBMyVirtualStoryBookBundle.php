<?php

namespace MVSB\MyVirtualStoryBookBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use MVSB\MyVirtualStoryBookBundle\Security\MVSBFactory;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class MVSBMyVirtualStoryBookBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $extension = $container->getExtension('security');
        $extension->addSecurityListenerFactory(new MVSBFactory());
    }   
}
