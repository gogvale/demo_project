<?php

namespace ShoppingCart\types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CartType extends ObjectType
{
    public function __construct()
    {
        $config = [
            'fields' => [
                'id' => Type::id()
            ],
        ];

        parent::__construct($config);
    }
}