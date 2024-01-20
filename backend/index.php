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
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
// Handle GraphQL query
try {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];
    $variables = $input['variables'] ?? null;
    $rootValue = ['prefix' => 'You said: '];

    $result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variables);
    $output = $result->toArray();
//    error_log("LOG: ".json_encode($output));
} catch (\Exception $e) {
    $output = ['error' => $e->getMessage()];
}

header('Content-Type: application/json');
echo json_encode($output);
