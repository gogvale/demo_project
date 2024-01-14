<?php
use ShoppingCart\Database;

$resolvers = [
    'Query' => [
        'getCart' => function ($rootValue, $args, $context) {
            return (new Database)->getCart($args['cartID']);
        },
        'getItems' => function ($rootValue, $args, $context) {
            return (new Database)->getItemsByCartID($args['cartID']);
        },
    ],
    'Mutation' => [
        'addToCart' => function ($rootValue, $args, $context) {
            // ... Resolver for addToCart
        },
        'updateCartItem' => function ($rootValue, $args, $context) {
            // ... Resolver for updateCartItem
        },
        'deleteCartItem' => function ($rootValue, $args, $context) {
            // ... Resolver for deleteCartItem
        },
    ],
];