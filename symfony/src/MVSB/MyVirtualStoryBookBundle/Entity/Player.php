<?php

namespace MVSB\MyVirtualStoryBookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Player
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="MVSB\MyVirtualStoryBookBundle\Entity\PlayerRepository")
 */
class Player
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
     * @ORM\Column(name="userName", type="string", length=255)
     */
    private $userName;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255)
     */
    private $password;


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
     * Set userNAme
     *
     * @param string $userNAme
     * @return Player
     */
    public function setUserNAme($userNAme)
    {
        $this->userNAme = $userNAme;

        return $this;
    }

    /**
     * Get userNAme
     *
     * @return string 
     */
    public function getUserNAme()
    {
        return $this->userNAme;
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
}
