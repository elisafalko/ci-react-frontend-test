<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $items = [
            'apiUrl' => '/api/items'
        ];

        return view('home', $items);
    }
}

