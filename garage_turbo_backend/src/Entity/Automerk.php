<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AutomerkRepository")
 */
class Automerk
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $merknaam;

    /**
     * @ORM\Column(type="integer")
     */
    private $beurt_interval;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMerknaam(): ?string
    {
        return $this->merknaam;
    }

    public function setMerknaam(string $merknaam): self
    {
        $this->merknaam = $merknaam;

        return $this;
    }

    public function getBeurtInterval(): ?int
    {
        return $this->beurt_interval;
    }

    public function setBeurtInterval(int $beurt_interval): self
    {
        $this->beurt_interval = $beurt_interval;

        return $this;
    }
}
