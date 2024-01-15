<?php


global $queryType, $mutationType;

use GraphQL\Type\Schema;


require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/config.php';
require_once  __DIR__ . '/src/types.php';
require_once  __DIR__ . '/src/resolvers.php';

$schema = new Schema([
    'query' => $queryType,
    'mutation' => $mutationType,
]);

