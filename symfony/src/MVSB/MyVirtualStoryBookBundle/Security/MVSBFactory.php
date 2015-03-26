<?php

namespace MVSB\MyVirtualStoryBookBundle\Security;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\DependencyInjection\DefinitionDecorator;
use Symfony\Component\Config\Definition\Builder\NodeDefinition;
use Symfony\Bundle\SecurityBundle\DependencyInjection\Security\Factory\SecurityFactoryInterface;

class MVSBFactory implements SecurityFactoryInterface
{
    public function create(ContainerBuilder $container, $id, $config, $userProvider, $defaultEntryPoint)
    {
        $providerId = 'mvsb.security.provider'.$id;
        $container
            ->setDefinition($providerId, new DefinitionDecorator('mvsb.security.provider'))
            ->replaceArgument(0, new Reference($userProvider))
        ;

        $listenerId = 'mvsb.security.listener'.$id;
        $listener = $container->setDefinition($listenerId, new DefinitionDecorator('mvsb.security.listener'));

        return array($providerId, $listenerId, $defaultEntryPoint);
    }

    public function getPosition()
    {
        return 'pre_auth';
    }

    public function getKey()
    {
        return 'mvsb';
    }

    public function addConfiguration(NodeDefinition $node)
    {
    }
}