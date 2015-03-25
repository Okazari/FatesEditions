<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use JMS\Serializer\Annotation as Serializer;
use Doctrine\ORM\Mapping as ORM;

/**
 * Transition
 * 
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Repository\TransitionRepository")
 * @Serializer\ExclusionPolicy("all");
 */
class Transition
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
     * @ORM\ManyToOne(targetEntity="Page", inversedBy="transitions")
     * @ORM\JoinColumn(name="from_page", referencedColumnName="id")
     * Serializer\Expose
     **/
    private $fromPage;

    /**
     * @var integer
     * @ORM\ManyToOne(targetEntity="Page", inversedBy="transitions")
     * @ORM\JoinColumn(name="to_page", referencedColumnName="id")
     * @Serializer\Expose
     */
    private $toPage;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", nullable=true)
     * @Serializer\Expose
     */
    private $text;


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
     * Set fromPage
     *
     * @param \stdClass $fromPage
     * @return Transition
     */
    public function setFromPage($fromPage)
    {
        $this->fromPage = $fromPage;

        return $this;
    }

    /**
     * Get fromPage
     *
     * @return \stdClass 
     */
    public function getFromPage()
    {
        return $this->fromPage;
    }

    /**
     * Set toPage
     *
     * @param \stdClass $toPage
     * @return Transition
     */
    public function setToPage($toPage)
    {
        $this->toPage = $toPage;

        return $this;
    }

    /**
     * Get toPage
     *
     * @return \stdClass 
     */
    public function getToPage()
    {
        return $this->toPage;
    }

    /**
     * Set text
     *
     * @param string $text
     * @return Transition
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
}
