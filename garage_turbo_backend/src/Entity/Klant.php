<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\KlantRepository")
 */
class Klant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Automerk", inversedBy="klanten")
     * @ORM\JoinColumn(nullable=false)
     */
    private $automerk;

    /**
     * @ORM\Column(type="string", length=17)
     */
    private $klantnaam;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $kenteken;

    /**
     * @ORM\Column(type="integer")
     */
    private $kilometerstand;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $vorige_stand;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $onderhoudsdatum;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $beurten_aantal;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAutomerk(): ?Automerk
    {
        return $this->automerk;
    }

    public function setAutomerk(?Automerk $automerk): self
    {
        $this->automerk = $automerk;

        return $this;
    }

    public function getKlantnaam(): ?string
    {
        return $this->klantnaam;
    }

    public function setKlantnaam(string $klantnaam): self
    {
        $this->klantnaam = $klantnaam;

        return $this;
    }

    public function getKenteken(): ?string
    {
        return $this->kenteken;
    }

    public function setKenteken(string $kenteken): self
    {
        $this->kenteken = $kenteken;

        return $this;
    }

    public function getKilometerstand(): ?int
    {
        return $this->kilometerstand;
    }

    public function setKilometerstand(int $kilometerstand): self
    {
        $this->kilometerstand = $kilometerstand;

        return $this;
    }

    public function getVorigeStand(): ?int
    {
        return $this->vorige_stand;
    }

    public function setVorigeStand(?int $vorige_stand): self
    {
        $this->vorige_stand = $vorige_stand;

        return $this;
    }

    public function getOnderhoudsdatum(): ?\DateTimeInterface
    {
        return $this->onderhoudsdatum;
    }

    public function setOnderhoudsdatum(?\DateTimeInterface $onderhoudsdatum): self
    {
        $this->onderhoudsdatum = $onderhoudsdatum;

        return $this;
    }

    public function getBeurtenAantal(): ?int
    {
        return $this->beurten_aantal;
    }

    public function setBeurtenAantal(?int $beurten_aantal): self
    {
        $this->beurten_aantal = $beurten_aantal;

        return $this;
    }
}
