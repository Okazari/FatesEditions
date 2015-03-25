<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use JMS\Serializer\Annotation as Serializer;
use Doctrine\ORM\Mapping as ORM;

/**
 * Page
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Repository\PageRepository")
 * @Serializer\ExclusionPolicy("all");
 */
class Page
{
    public function __clone() {
        if ($this->id) {
            $this->id = null;
            $copy = array();
            foreach($this->transitions as $transition){
                $transition = clone $transition;
                $transition->setFromPage($this);
                $copy[] = $transition;
            }
            $this->transitions = $copy;
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
     *
     * @ORM\Column(name="title", type="string", length=255)
     * @Serializer\Expose
     */
    private $title;
    
    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text")
     * @Serializer\Expose
     */
    private $text;

    /**
     * @var string
     * 
     * @ORM\Column(name="description", type="text")
     * @Serializer\Expose
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="text", nullable=true)
     * @Serializer\Expose
     */
    private $image;

    /**
     * @var array
     * @ORM\OneToMany(targetEntity="Transition", mappedBy="fromPage", cascade={"persist","remove", "merge"})
     * @Serializer\Expose
     * @Serializer\MaxDepth(4);
     */
    private $transitions;


    /**
     * @ORM\ManyToOne(targetEntity="Book", inversedBy="pages")
     * @ORM\JoinColumn(name="book_id", referencedColumnName="id")
     * @Serializer\Expose
     **/

    private $book;

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
     * Set text
     *
     * @param string $text
     * @return Page
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string 
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return Page
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }
    
    /**
     * get title
     *
     * @return string $title
     */
    public function getTitle()
    {
        return $this->title;
    }
    
    /**
     * Set Description
     *
     * @param string $description
     * @return Page
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }
    
    /**
     * get description
     *
     * @return string description
     */
    public function getDescription()
    {
        return $this->description;
    }
    
    /**
     * Set image
     *
     * @param string $image
     * @return Page
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return string 
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set transitions
     *
     * @param array $transitions
     * @return Page
     */
    public function setTransitions($transitions)
    {
        $this->transitions = $transitions;

        return $this;
    }

    /**
     * Get transitions
     *
     * @return array 
     */
    public function getTransitions()
    {
        return $this->transitions;
    }
    
    /**
     * Set Book
     *
     * @param Book $book
     * @return Page
     */
    public function setBook($book)
    {
        $this->book = $book;

        return $this;
    }

    /**
     * Get Book
     *
     * @return Book 
     */
    public function getBook()
    {
        return $this->book;
    }
}
