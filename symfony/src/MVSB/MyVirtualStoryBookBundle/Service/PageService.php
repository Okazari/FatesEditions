<?php
namespace MVSB\MyVirtualStoryBookBundle\Service;

use MVSB\MyVirtualStoryBookBundle\Repository\PageRepository;
use MVSB\MyVirtualStoryBookBundle\Repository\TransitionRepository;
use MVSB\MyVirtualStoryBookBundle\Entity\Book;
use MVSB\MyVirtualStoryBookBundle\Entity\Transition;

class PageService{
    
    private $pageRepository;
    private $transitionRepository;

    public function __construct(PageRepository $pageRepository, TransitionRepository $transitionRepository){
        $this->pageRepository = $pageRepository;
        $this->transitionRepository = $transitionRepository;
    }
    
    public function deletePage($id){
        $page = $this->pageRepository->findOneById($id);
        return $this->pageRepository->removeEntityFromBase($page);
    }
    
    public function getPageById($id){
        return $this->pageRepository->findOneById($id);
    }
    
    public function updatePage($id, $pageFromJson){
        $page = $this->pageRepository->findOneById($id);
        $page->setTitle($pageFromJson->getTitle());
        $page->setDescription($pageFromJson->getDescription());
        $page->setText($pageFromJson->getText());
        $page->setBackgroundMusic($pageFromJson->getBackgroundMusic());
        $transitions = [];
        $page->setTransitions($transitions);
        forEach($pageFromJson->getTransitions() as $transitionFromJson){
            $transitionFromJson->setFromPage($page);
            $transitionFromJson->setToPage($this->pageRepository->findOneById($transitionFromJson->getToPage()));
            $this->updateTransition($transitionFromJson);
        }
        $this->pageRepository->flushEntityToBase($page);
        return $page;
    }
    
    public function updateTransition($transition){
        $transitionFromBase = $this->transitionRepository->findOneById($transition->getId());
        $transitionFromBase->setText($transition->getText());
        $transitionFromBase->setToPage($transition->getToPage());
        $transitionFromBase->setFromPage($transition->getFromPage());
        $this->transitionRepository->flushEntityToBase($transitionFromBase);
    }
    
    public function addTransition($id){
        $page = $this->pageRepository->findOneById($id);
        $pageTransitions = $page->getTransitions();
        $transition = new Transition();
        $pageTransitions[] = $transition->setFromPage($page);
        $this->pageRepository->flushEntityToBase($page);
        return $pageTransitions;
    }
    
    public function deleteTransition($id){
        $transition = $this->transitionRepository->findOneById($id);
        return $this->transitionRepository->removeEntityFromBase($transition);
    }
    
}