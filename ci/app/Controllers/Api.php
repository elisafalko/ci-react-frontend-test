<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class Api extends BaseController
{
    use ResponseTrait;

    public function items()
    {
        $data = [
            [
                'id'    => 1,
                'title' => 'First item',
                'body'  => 'This data comes from CodeIgniter JSON endpoint.'
            ],
            [
                'id'    => 2,
                'title' => 'Second item',
                'body'  => 'React will consume this API later.'
            ],
            [
                'id'    => 3,
                'title' => 'Third item',
                'body'  => 'Clean separation between backend and frontend.'
            ],
        ];

        return $this->respond($data);
    }
}
