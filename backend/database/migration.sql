-- Create 'carts' table
CREATE TABLE carts
(
    cart_id INT PRIMARY KEY AUTO_INCREMENT
);

-- Create 'items' table
CREATE TABLE items
(
    item_id     INT PRIMARY KEY AUTO_INCREMENT,
    title       TEXT,
    description TEXT,
    image       TEXT,
    price       INT,
    amount      INT
    -- Add other item-related fields if needed
);

-- Create 'cart_items' table
CREATE TABLE cart_items
(
    cart_item_id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id      INT,
    item_id      INT,
    items_count  INT UNSIGNED,
    FOREIGN KEY (cart_id) REFERENCES carts (cart_id),
    FOREIGN KEY (item_id) REFERENCES items (item_id)
);
