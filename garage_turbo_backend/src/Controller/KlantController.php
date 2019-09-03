<?php
namespace App\Controller;

use App\Entity\Klant;
use App\Service\KlantService;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;

class KlantController extends FOSRestController {
    private $ks;
    private $serializer;

    public function __construct(KlantService $ks, SerializerInterface $serializer) {
        $this->ks = $ks;
        $this->serializer = $serializer;
    }

    /**
     * @Rest\Get("/")
     */
    public function getList(Request $request):View {
        $data = $this->ks->findAll();
        
        return( View::create($data, Response::HTTP_OK) );
    }

    /**
     * @Rest\Get("/klant/{id}")
     */
    public function getItem(Request $request):View {
        $id = $request->get("id");
        $data = $this->ks->find($id);

        return( View::create($data, Response::HTTP_OK) );
    }

    /**
     * @Rest\Post("/create")
     */
    public function create(Request $request):View {
        $data = $this->ks->insertRecord();

        return( View::create($data, Response::HTTP_OK) );
    }

    /**
     * @Rest\Post("/create/testdata")
     */
    public function createTestData(Request $request):View {
        $aantal = random_int(10, 100);
        $data = array();
        for ($i = 0; $i < $aantal; $i++) {
            $data[] = $this->ks->insertRecord();
        }
        return( View::create($data, Response::HTTP_OK) );
    }

    /**
     * @Rest\Put("/update/kilometerstand/{id}")
     */
    public function updateKilometerstand(Request $request):View {
        $id = $request->get("id");
        $data = $this->ks->updateKilometerstand($id);

        return( View::create($data, Response::HTTP_OK) );
    }

    /**
     * @Rest\Delete("/delete/all")
     */
    public function deleteAll(Request $request):View {
        $data = $this->ks->deleteAll();

        return( View::create($data, Response::HTTP_OK) );
    }
}