<?php

namespace App\Controllers;

// class Home extends BaseController
// {
//     public function index()
//     {
//         $items = [
//             'apiUrl' => '/api/items'
//         ];

//         return view('home', $items);
//     }
// }


class Home extends BaseController
{
    public function index()
    {
        return $this->response
            ->setHeader('Content-Type', 'text/html')
            ->setBody(
                file_get_contents(FCPATH . 'assets/frontend/index.html')
            );
    }
}

