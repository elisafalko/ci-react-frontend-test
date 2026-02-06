<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class Api extends BaseController
{
    use ResponseTrait;

    public function items()
    {
        $jsonPath = APPPATH . 'Data/items.json';
        $data = json_decode(file_get_contents($jsonPath), true);

        return $this->respond($data);
    }

    public function earlyAccess()
    {
        $path = APPPATH . 'Data/early_access.json';
        $data = json_decode(file_get_contents($path), true);

        return $this->respond($data);
    }

    public function whyChoose()
    {
        $path = APPPATH . 'Data/why_choose.json';
        $data = json_decode(file_get_contents($path), true);

        return $this->respond($data);
    }

    public function ironPdf()
    {
        $path = APPPATH . 'Data/iron_pdf.json';
        $data = json_decode(file_get_contents($path), true);

        return $this->respond($data);
    }

    public function hero()
    {
        $path = APPPATH . 'Data/hero.json';
        $data = json_decode(file_get_contents($path), true);

        return $this->respond($data);
    }
}
