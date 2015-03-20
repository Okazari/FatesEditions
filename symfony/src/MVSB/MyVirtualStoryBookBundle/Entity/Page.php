<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Page
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Entity\PageRepository")
 */
class Page
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text")
     */
    private $text;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", length=255)
     */
    private $image;

    /**
     * @var array
     * @ORM\OneToMany(targetEntity="Page", mappedBy="book", cascade={"persist"})
     */
    private $transitions;


    /**
     * @ORM\ManyToOne(targetEntity="Book", inversedBy="pages")
     * @ORM\JoinColumn(name="book_id", referencedColumnName="id")
     * Serializer\Expose
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
