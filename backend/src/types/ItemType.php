<?php

namespace Gogvale\ShoppingCart\types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ItemType extends ObjectType
{
    public function __construct()
    {
        $config = [
            'fields' => [
                'id' => Type::id(),
                'title' => Type::string(),
                'description' => Type::string(),
                'image' => Type::string(),
                'price' => Type::int(),
                'amount' => Type::int()
            ],
        ];

        parent::__construct($config);
    }
}