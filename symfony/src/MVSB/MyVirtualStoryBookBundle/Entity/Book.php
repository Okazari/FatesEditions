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
     * @var boolean
     * 
     * @ORM\Column(name="draft", type="boolean")
     * @Serializer\Expose
     */
    private $draft;

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
     * Set synopsisText
     *
     * @param string $synopsisText
     * @return Book
     */
    public function setSynopsisText($synopsisText)
    {
        $this->synopsisText = $synopsisText;

        return $this;
    }

    /**
     * Get synopsisText
     *
     * @return string 
     */
    public function getSynopsisText()
    {
        return $this->synopsisText;
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
}
