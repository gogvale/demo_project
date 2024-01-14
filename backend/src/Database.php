<?php

namespace ShoppingCart;

use PDO;
use PDOException;

class Database
{
    private static $pdo;

    public function __construct()
    {
        self::getInstance();
    }

    private static function getInstance()
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
                throw new  \Exception("Connection failed: " . $e->getMessage());
            }

        }
    }

    public function getCart($id)
    {
        $query = "SELECT * FROM carts WHERE cart_id = :id";
        $statement = self::$pdo->prepare($query);
        $statement->bindParam(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        $cart = $statement->fetch(PDO::FETCH_ASSOC);

        if ($cart) {
            $result = self::getItemsByCartID($id);
            $cart['items'] = $result;
            $cart['subtotal'] = array_sum(array_column($result, 'total'));
        }
        return $cart;
    }

    public function getItemsByCartID($cartID)
    {
        $query = "SELECT 
                    items.*,
                    cart_items.items_count,
                    cart_items.items_count * items.price AS total
                FROM 
                    items
                JOIN 
                    cart_items ON items.item_id = cart_items.item_id
                WHERE 
                    cart_items.cart_id = :cart_id;";
        $statement = self::$pdo->prepare($query);
        $statement->bindParam(':cart_id', $cartID, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}