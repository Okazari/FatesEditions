<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use JMS\Serializer\Annotation as Serializer;
use Doctrine\ORM\Mapping as ORM;

/**
 * Book
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Repository\BookRepository")
 *  
 * @Serializer\ExclusionPolicy("all");
 * 
 */
class Book
{
    public function __clone() {
        if ($this->id) {
            $this->id = null;
            $copy = array();
            $newPagesMapping = array();
            foreach($this->pages as $page){
                $oldId = $page->getId();
                
                $page = clone $page;
                $page->setBook($this);
                
                $newPagesMapping[$oldId] = $page;
                $copy[] = $page;
            }
            foreach($copy as $page){
                foreach($page->getTransitions() as $transition){
                    $oldPageId = $transition->getToPage()->getId();
                    $transition->setToPage($newPagesMapping[$oldPageId]);
                }
            }
            $this->pages = $copy;
        }
    }
    
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Serializer\Expose
     */
    private $id;

    /**
     * @var string
     * @Serializer\Expose
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var array
     *
     * ORM\Column(name="tags", type="array")
     * @Serializer\Expose
     */
    private $tags;

    /**
     * @var string
     *
     * @ORM\Column(name="synopsis", type="text")
     * @Serializer\Expose
     */
    private $synopsis;

    /**
     * @var string
     *
     * @ORM\Column(name="cover", type="text")
     * @Serializer\Expose
     */
    private $cover;

    /**
     * @ORM\ManyToOne(targetEntity="Player", inversedBy="books")
     * @ORM\JoinColumn(name="author_id", referencedColumnName="id")
     * @Serializer\Expose
     **/

    private $author;
    
    /**
     * @ORM\ManyToOne(targetEntity="Genre", inversedBy="books")
     * @ORM\JoinColumn(name="genre_id", referencedColumnName="id")
     * @Serializer\Expose
     **/

    private $genre;

    /**
     * @var boolean
     * 
     * @ORM\Column(name="draft", type="boolean")
     * @Serializer\Expose
     */
    private $draft;

    /**
     * @ORM\OneToMany(targetEntity="Page", mappedBy="book", cascade={"persist","remove"})
     **/
    private $pages;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Book
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set tags
     *
     * @param array $tags
     * @return Book
     */
    public function setTags($tags)
    {
        $this->tags = $tags;

        return $this;
    }

    /**
     * Get tags
     *
     * @return array 
     */
    public function getTags()
    {
        return $this->tags;
    }
    
    /**
     * Set author
     *
     * param $author
     * @return Book
     */
    public function setAuthor($author)
    {
        $this->author = $author;

        return $this;
    }
    
    /**
     * Get Author
     *
     */
    public function getAuthor()
    {
        return $this->author;
    }
    
    /**
     * Set genre
     *
     * param $genre
     * @return Book
     */
    public function setGenre($genre)
    {
        $this->genre = $genre;

        return $this;
    }
    
    /**
     * Get genre
     *
     */
    public function getGenrer()
    {
        return $this->genre;
    }

    /**
     * Set synopsis
     *
     * @param string $synopsis
     * @return Book
     */
    public function setSynopsis($synopsis)
    {
        $this->synopsis = $synopsis;

        return $this;
    }

    /**
     * Get synopsis
     *
     * @return string 
     */
    public function getSynopsis()
    {
        return $this->synopsis;
    }

    /**
     * Set cover
     *
     * @param string $cover
     * @return Book
     */
    public function setCover($cover)
    {
        $this->cover = $cover;

        return $this;
    }

    /**
     * Get cover
     *
     * @return string 
     */
    public function getCover()
    {
        return $this->cover;
    }
    /**
     * Set draft
     *
     * @param string $draft
     * @return Book
     */
    public function setDraft($draft)
    {
        $this->draft = $draft;

        return $this;
    }

    /**
     * Get draft
     *
     * @return bool 
     */
    public function getDraft()
    {
        return $this->draft;
    }
    
    /**
     * Set pages
     *
     * @param Page $pages
     * @return Player
     */
    public function setPages($pages)
    {
        $this->pages = $pages;

        return $this;
    }

    /**
     * Get pages
     *
     * @return Page 
     */
    public function getPages()
    {
        return $this->pages;
    }
}
