<?php

use ShoppingCart\Database;

$resolvers = [
    'Query' => [
        // Gets cart with items
        'getCart' => function ($rootValue, $args, $context) {
            return (new Database)->getCart($args['cartID']);
        },
        // Gets catalog
        'getItems' => function ($rootValue, $args, $context) {
            return (new Database)->getCatalog();
        },
    ],
    'Mutation' => [
        'addToCart' => function ($rootValue, $args, $context) {
            return (new Database)->addCartItem($args['cartID'], $args['itemID'], $args['amount']);
        },
        'updateCartItem' => function ($rootValue, $args, $context) {
            return (new Database)->updateCartItem($args['cartItemID'], $args['amount']);
        },
        'deleteCartItem' => function ($rootValue, $args, $context) {
            return (new Database)->deleteCartItem($args['itemID']);
        },
    ],
];