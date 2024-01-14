<?php

namespace ShoppingCart\resolvers;

use ShoppingCart\Database;

class CartResolver
{

    public static function GetItemsByID($int)
    {
        $pdo = Database::getInstance();
    }
}