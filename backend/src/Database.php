<?php

namespace ShoppingCart;

use PDO;
use PDOException;

class Database
{
    private static $pdo;

    private function __construct()
    {
        // Private constructor to prevent creating multiple instances
    }

    public static function getInstance()
    {
        if (!self::$pdo) {
            // Configure PDO connection parameters

            $host = $_ENV['HOST'];
            $username = $_ENV['USERNAME'];
            $password = $_ENV['PASSWORD'];
            $dbname = $_ENV['DATABASE'];
            try {
                self::$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

                // Set PDO to throw exceptions on errors
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // Set the default fetch mode to associative array
                self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

                // Additional configurations if needed
            } catch (PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }

        }

        return self::$pdo;
    }
}