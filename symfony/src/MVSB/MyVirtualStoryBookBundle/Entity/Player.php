<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Player
 *
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="user_unique",columns={"username"})})
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Repository\PlayerRepository")
 * 
 * @Serializer\ExclusionPolicy("all");
 */
class Player implements UserInterface
{
    /**
     * @var integer
     *
     * @Serializer\Expose
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @Serializer\Expose
     * @ORM\Column(name="username", type="string", length=255)
     */
    private $username;

    /**
     * @var string
     * Serializer\Expose
     * @ORM\Column(name="password", type="string", length=255)
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity="Book", mappedBy="author", cascade={"persist"})
     **/
    private $books;

    /**
     * @ORM\OneToMany(targetEntity="Game", mappedBy="player", cascade={"persist","remove"})
     **/
    private $games;

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
     * Set username
     *
     * @param string $username
     * @return Player
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string 
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set password
     *
     * @param string $password
     * @return Player
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string 
     */
    public function getPassword()
    {
        return $this->password;
    }
    /**
     * Set books
     *
     * @param Book $books
     * @return Player
     */
    public function setBooks($books)
    {
        $this->books = $books;

        return $this;
    }

    /**
     * Get book
     *
     * @return Book 
     */
    public function getBooks()
    {
        return $this->books;
    }
    /**
     * Set Games
     *
     * @param Game $games
     * @return Player
     */
    public function setGames($games)
    {
        $this->games = $games;

        return $this;
    }

    /**
     * Get Games
     *
     * @return Game 
     */
    public function getGames()
    {
        return $this->games;
    }
    
    public function getRoles(){
        return array('ROLE_USER');
    }
    
    public function getSalt(){
        return "It's over 9000";
    }
    
    public function eraseCredentials(){
        $this->password = "";
        $this->username = "";
    }
}
