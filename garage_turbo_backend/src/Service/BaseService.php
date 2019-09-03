<?php
namespace App\Service;
use Doctrine\ORM\EntityManagerInterface;

class BaseService {
    private $rep;
    private $em;

    /**
     * Functie: __construct
     * Doel:    Constructor van de klasse
     * Taken:   Verkrijgt de entity manager en repository
     */
    public function __construct($em, $entity) {
        $this->em = $em;
        $this->rep = $this->em->getRepository($entity);
    }

    public function getEntityManager() {
        return $this->em;
    }

    public function getRep() {
        return $this->rep;
    }

    /**
     * Functie: find
     * Doel:    vind de record met het meegegeven id
     */
    public function find($id) {
        return $this->rep->find($id);
    }

    /**
     * Functie: findAll
     * Doel:    vind alle records van de entity
     */
    public function findAll() {
        return $this->rep->findAll();
    } 
}