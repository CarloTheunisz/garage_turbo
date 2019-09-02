<?php
namespace App\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class UserService extends BaseService {
    public function __construct(EntityManagerInterface $em) {
        parent::__construct($em, User::class);
    }
}