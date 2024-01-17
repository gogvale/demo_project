<?php


global $queryType, $mutationType;

use GraphQL\GraphQL;
use GraphQL\Type\Schema;


require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/src/types.php';

$schema = new Schema([
    'query' => $queryType,
    'mutation' => $mutationType,
]);

// Handle GraphQL query
try {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];
    $variables = $input['variables'] ?? null;
    $rootValue = ['prefix' => 'You said: '];

    $result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variables);
    $output = $result->toArray();
} catch (\Exception $e) {
    $output = ['error' => $e->getMessage()];
}

header('Content-Type: application/json');
echo json_encode($output);
