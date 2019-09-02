<?php
namespace App\Service;

use App\Entity\Klant;
use Doctrine\ORM\EntityManagerInterface;

class KlantService extends BaseService {
    public function __construct(EntityManagerInterface $em) {
        parent::__construct($em, Klant::class);
    }
}