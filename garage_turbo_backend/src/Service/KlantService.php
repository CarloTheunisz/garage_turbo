<?php
namespace App\Service;

use App\Entity\Klant;
use Doctrine\ORM\EntityManagerInterface;

class KlantService extends BaseService {
    private $rep;

    public function __construct(EntityManagerInterface $em) {
        parent::__construct($em, Klant::class);
        $this->rep = $this->getRep();
    }

    public function deleteAll() {
        return $this->rep->deleteAll();
    }
}