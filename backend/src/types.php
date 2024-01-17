<?php

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use ShoppingCart\Database;

$db = new Database();

// Define the Item type
$itemType = new ObjectType([
    'name' => 'Item',
    'fields' => [
        'item_id' => Type::id(),
        'title' => Type::string(),
        'description' => Type::string(),
        'image' => Type::string(),
        'price' => Type::int(),
        'amount' => Type::int(),
    ],
]);

// Define the CartItem type
$cartItemType = new ObjectType([
    'name' => 'CartItem',
    'fields' => [
        'cart_item_id' => Type::id(),
        'items_count' => Type::int(),
        'item' => $itemType,
        'total' => Type::int(),
    ],
]);

// Define the Cart type
$cartType = new ObjectType([
    'name' => 'Cart',
    'fields' => [
        'cart_id' => Type::id(),
        'cart_items' => Type::listOf($cartItemType),
        'subtotal' => Type::int(),
    ],
]);

// Define the Query type
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'getCart' => [
            'type' => $cartType,
            'args' => [
                'cartID' => Type::id(),
            ],
            'resolve' => fn($root, $args) => $db->getCart($args['cartID']),
        ],
        'getItems' => [
            'type' => Type::listOf($itemType),
            'resolve' => fn() => $db->getCatalog(),
        ],
        'echo' => [
            'type' => Type::string(),
            'args' => [
                'message' => Type::nonNull(Type::string()),
            ],
            'resolve' => fn($rootValue, array $args): string => $rootValue['prefix'] . $args['message'],
        ],
    ],
]);
// Define the Mutation type
$mutationType = new ObjectType([
    'name' => 'Mutation',
    'fields' => [
        'addToCart' => [
            'type' => Type::boolean(),
            'args' => [
                'cartID' => Type::id(),
                'itemID' => Type::id(),
                'amount' => Type::int(),
            ],
            'resolve' => fn($root, $args) => $db->addCartItem($args['cartID'], $args['itemID'], $args['amount']),
        ],
        'updateCartItem' => [
            'type' => Type::boolean(),
            'args' => [
                'cartItemID' => Type::id(),
                'amount' => Type::int(),
            ],
            'resolve' => fn($root, $args) => $db->updateCartItem($args['cartItemID'], $args['amount']),
        ],
        'deleteCartItem' => [
            'type' => Type::boolean(),
            'args' => [
                'cartItemID' => Type::id(),
            ],
            'resolve' => fn($root, $args) => $db->deleteCartItem($args['cartItemID']),
        ],
    ],
]);
