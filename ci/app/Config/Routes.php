<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/api/items', 'Api::items');
$routes->get('/api/early-access', 'Api::earlyAccess');
$routes->get('/api/why-choose', 'Api::whyChoose');
$routes->get('/api/iron-pdf', 'Api::ironPdf');
$routes->get('/api/hero', 'Api::hero');