<?php

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use ShoppingCart\Database;

$itemType = new ObjectType([
    'name' => 'Item',
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'title' => Type::nonNull(Type::string()),
        'description' => Type::nonNull(Type::string()),
        'image' => Type::nonNull(Type::string()),
        'price' => Type::nonNull(Type::int()),
        'amount' => Type::nonNull(Type::int()),
    ],
]);

$cartItemType = new ObjectType([
    'name' => 'CartItem',
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'items_count' => Type::nonNull(Type::int()),
        'item' => Type::nonNull($itemType),
        'total' => Type::nonNull(Type::int()),
    ],
]);

$cartType = new ObjectType([
    'name' => 'Cart',
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'cart_items' => Type::nonNull(Type::listOf(Type::nonNull($cartItemType))),
        'subtotal' => Type::nonNull(Type::int()),
    ],
]);

$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'getCart' => [
            'type' => $cartType,
            'args' => [
                'cartID' => Type::nonNull(Type::id()),
            ],
            'resolve' => function ($rootValue, $args, $context) {
                (new Database())->getCart($args['cartID']);
            },
        ],
        'getItems' => [
            'type' => Type::nonNull(Type::listOf(Type::nonNull($itemType))),
            'resolve' => function () {
                (new Database())->getCatalog();
            },
        ],
    ],
]);

$mutationType = new ObjectType([
    'name' => 'Mutation',
    'fields' => [
        'addToCart' => [
            'type' => Type::nonNull(Type::boolean()),
            'args' => [
                'cartID' => Type::nonNull(Type::id()),
                'itemID' => Type::nonNull(Type::id()),
                'amount' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($rootValue, $args, $context) {
                (new Database())->addCartItem($args['cartID'], $args['itemID'], $args['amount']);
            },
        ],
        'updateCartItem' => [
            'type' => Type::nonNull(Type::boolean()),
            'args' => [
                'cartItemID' => Type::nonNull(Type::id()),
                'amount' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($rootValue, $args, $context) {
                (new Database())->updateCartItem($args['cartItemID'],$args['amount']);
            },
        ],
        'deleteCartItem' => [
            'type' => Type::nonNull(Type::boolean()),
            'args' => [
                'cartItemID' => Type::nonNull(Type::id()),
            ],
            'resolve' => function ($rootValue, $args, $context) {
                (new Database())->deleteCartItem($args['cartItemID']);
            },
        ],
    ],
]);