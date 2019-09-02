<?php
namespace App\Service;

use App\Entity\Automerk;
use Doctrine\ORM\EntityManagerInterface;

class AutomerkService extends BaseService {
    public function __construct(EntityManagerInterface $em) {
        parent::__construct($em, Automerk::class);
    }
}