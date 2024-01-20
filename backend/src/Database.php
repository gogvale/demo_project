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

    private function getItemsByCartItemID($cartItemID)
    {
        $query = "SELECT items.item_id, title, description, image, price, amount
                  FROM items
                  JOIN cart_items on items.item_id = cart_items.item_id
                  WHERE cart_item_id = :id";
        $statement = self::$pdo->prepare($query);
        $statement->bindParam(':id', $cartItemID, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetch(PDO::FETCH_ASSOC);
    }

    public function getCart($id)
    {
        $query = "SELECT * FROM carts WHERE cart_id = :id";
        $statement = self::$pdo->prepare($query);
        $statement->bindParam(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        $cart = $statement->fetch(PDO::FETCH_ASSOC);

        if ($cart) {
            $items = self::getItemsByCartID($id);
            foreach (self::getCartItems($id) as &$cartItem){
                $cart['cart_items'][] = $cartItem;
                $cart['cart_items'][array_key_last($cart['cart_items'])]['item'] = self::getItemsByCartItemID($cartItem['cart_item_id']);
            }
            $cart['subtotal'] = array_sum(array_column($items, 'total'));
        }
        return $cart;
    }

    private function getCartItems($cartID)
    {
        $query = "SELECT cart_item_id, items_count, items_count * items.price as total
                  FROM cart_items
                           JOIN items on cart_items.item_id = items.item_id
                  WHERE cart_id = :id";
        $statement = self::$pdo->prepare($query);
        $statement->bindParam(':id', $cartID, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    private function getItemsByCartID($cartID)
    {
        $query = "SELECT 
                    items.*,
                    cart_items.cart_item_id,
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

    public function addCartItem($cartID, $itemID, $amount)
    {
        $query = "INSERT INTO cart_items (cart_id, item_id, items_count) VALUES (?,?,?)";
        $statement = self::$pdo->prepare($query);
        return $statement->execute([$cartID, $itemID, $amount]);
    }

    public function updateCartItem($cartItemID, $amount)
    {
        $query = "UPDATE cart_items SET items_count=? WHERE cart_item_id = ?";
        $statement = self::$pdo->prepare($query);
        return $statement->execute([$amount, $cartItemID]);
    }

    public function deleteCartItem($cartItemID)
    {
        $query = "DELETE FROM cart_items WHERE cart_item_id = :cartItemID";
        $statement = self::$pdo->prepare($query);
        $statement->bindParam(':cartItemID', $cartItemID, PDO::PARAM_INT);
        return $statement->execute();
    }

    public function getCatalog()
    {
        $query = "SELECT * FROM items";
        $statement = self::$pdo->prepare($query);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getItem($id)
    {
        $query = "SELECT * FROM items WHERE item_id = ?";
        $statement = self::$pdo->prepare($query);
        $statement->execute([$id]);
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
}
