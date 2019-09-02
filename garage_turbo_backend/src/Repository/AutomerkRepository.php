<?php

namespace App\Repository;

use App\Entity\Automerk;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Automerk|null find($id, $lockMode = null, $lockVersion = null)
 * @method Automerk|null findOneBy(array $criteria, array $orderBy = null)
 * @method Automerk[]    findAll()
 * @method Automerk[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AutomerkRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Automerk::class);
    }

    // /**
    //  * @return Automerk[] Returns an array of Automerk objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Automerk
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
