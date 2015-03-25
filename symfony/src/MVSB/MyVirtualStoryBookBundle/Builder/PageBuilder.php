<?php
namespace MVSB\MyVirtualStoryBookBundle\Builder;

use MVSB\MyVirtualStoryBookBundle\Entity\Page;

class PageBuilder{
    
    public function createNewPage($book){
        $page = new Page();
        $page->setTitle("New_Page_".time())
             ->setText("")
             ->setDescription("")
             ->setBook($book);
        return $page;
    }
    
}