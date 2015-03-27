<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use JMS\Serializer\Annotation as Serializer;
use Doctrine\ORM\Mapping as ORM;

/**
 * Game
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Repository\GameRepository")
 */
class Game
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
     * @Serializer\MaxDepth(2)
     * @ORM\ManyToOne(targetEntity="Player", inversedBy="games")
     * @ORM\JoinColumn(name="player_id", referencedColumnName="id")
     **/
    private $player;

    /**
     * @ORM\ManyToOne(targetEntity="Page")
     * @ORM\JoinColumn(name="page_id", referencedColumnName="id")
     * @Serializer\MaxDepth(1)
     */
    private $currentPage;

    /**
     * @ORM\ManyToOne(targetEntity="Book")
     * @ORM\JoinColumn(name="book_id", referencedColumnName="id")
     * @Serializer\MaxDepth(2)
     */
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
     * Set player
     *
     * @param Player $player
     * @return Game
     */
    public function setPlayer($player)
    {
        $this->player = $player;

        return $this;
    }

    /**
     * Get player
     *
     * @return Player 
     */
    public function getPlayer()
    {
        return $this->player;
    }

    /**
     * Set currentPage
     *
     * @param Page $currentPage
     * @return Game
     */
    public function setCurrentPage($currentPage)
    {
        $this->currentPage = $currentPage;

        return $this;
    }

    /**
     * Get currentPage
     *
     * @return Page 
     */
    public function getCurrentPage()
    {
        return $this->currentPage;
    }

    /**
     * Set book
     *
     * @param Book $book
     * @return Game
     */
    public function setBook($book)
    {
        $this->book = $book;

        return $this;
    }

    /**
     * Get book
     *
     * @return Book
     */
    public function getBook()
    {
        return $this->book;
    }
}
