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
        $klant->setAutomerk($this->as->find(random_int(1, 3)));
        $klant->setKlantnaam('Placeholder');
        $klant->setKenteken($this->generateKenteken());
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

    private function generateKenteken() {
        $letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $cijfers = "0123456789";

        $kenteken = "";
        for($i = 0; $i < 8; $i++) {
            switch ($i) {
                case 0:
                case 1:
                case 7:
                    $kenteken .= substr(str_shuffle($letters), $i, 1);
                    break;
                case 2:
                case 6:
                    $kenteken .= "-";
                    break;
                case 3:
                case 4:
                case 5:
                    $kenteken .= substr(str_shuffle($cijfers), $i, 1);
                    break;
                default:
                    break;
            }
        }
        return $kenteken;
    }
}