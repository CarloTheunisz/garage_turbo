<?php
namespace App\Service;

use App\Entity\Klant;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;

class KlantService extends BaseService {
    private $as;
    private $em;
    private $rep;

    public function __construct(EntityManagerInterface $em, AutomerkService $as) {
        parent::__construct($em, Klant::class);
        $this->as = $as;
        $this->em = $this->getEntityManager();
        $this->rep = $this->getRep();
    }

    public function insertRecord() {
        $klant = new Klant();
        $klant->setAutomerk($this->as->find(2));
        $klant->setKlantnaam('Placeholder');
        $klant->setKenteken('36-PGN-5');
        $klant->setKilometerstand('0');
        $this->em->persist($klant);
        $this->em->flush();

        $klant->setKlantnaam('Klant_'.$klant->getId());
        $this->em->persist($klant);
        $this->em->flush();

        return new Response('Nieuwe klant opgeslagen met id '.$klant->getId());
    }

    public function deleteAll() {
        return $this->rep->deleteAll();
    }
}