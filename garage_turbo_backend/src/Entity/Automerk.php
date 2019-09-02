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

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Klant", mappedBy="automerk", orphanRemoval=true)
     */
    private $klanten;

    public function __construct()
    {
        $this->klanten = new ArrayCollection();
    }

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

    /**
     * @return Collection|Klant[]
     */
    public function getKlanten(): Collection
    {
        return $this->klanten;
    }

    public function addKlanten(Klant $klanten): self
    {
        if (!$this->klanten->contains($klanten)) {
            $this->klanten[] = $klanten;
            $klanten->setAutomerk($this);
        }

        return $this;
    }

    public function removeKlanten(Klant $klanten): self
    {
        if ($this->klanten->contains($klanten)) {
            $this->klanten->removeElement($klanten);
            // set the owning side to null (unless already changed)
            if ($klanten->getAutomerk() === $this) {
                $klanten->setAutomerk(null);
            }
        }

        return $this;
    }
}
