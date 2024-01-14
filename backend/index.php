<?php


use ShoppingCart\Database;

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/config.php';

$db = new Database;
var_dump($db->getCart(1));
