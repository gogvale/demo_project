<?php

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;

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
    'name' => 'CartItemType',
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'items_count' => Type::nonNull(Type::int()),
        'item' => Type::nonNull($itemType),
    ],
]);
$cartType = new ObjectType([
    'name' => 'CartType',
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'cart_items' => Type::nonNull(Type::listOf(Type::nonNull($cartItemType))),
    ],
]);