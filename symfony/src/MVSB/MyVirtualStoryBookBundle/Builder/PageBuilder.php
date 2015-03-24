<?php
namespace MVSB\MyVirtualStoryBookBundle\Builder;

use MVSB\MyVirtualStoryBookBundle\Entity\Page;

class PageBuilder{
    
    public function createNewPage($book){
        $page = new Page();
        $page->setTitle("New_Page_".time())
             ->setText("Ecrivez votre histoire ici")
             ->setDescription("Décrivez ce qu'il se passe dans cette page ici")
             ->setBook($book);
        return $page;
    }
    
}