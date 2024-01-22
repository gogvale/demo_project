INSERT INTO shopping_cart.carts (cart_id)
VALUES (1);
INSERT INTO shopping_cart.items (title, description, image, price, amount)
VALUES ('Tennis Racket', 'High-quality tennis racket for professional players',
        'https://courtsidetennis.com/cdn/shop/articles/Untitled-1.png?v=1664521489', 7500, 20),
       ('Running Shoes', 'Comfortable and durable running shoes for all terrains',
        'https://m.media-amazon.com/images/I/6146p0rXnFL._AC_UY900_.jpg', 5000, 30),
       ('Golf Clubs Set', 'Complete set of golf clubs for enthusiasts and beginners',
        'https://m.media-amazon.com/images/I/61jYhHiiXoL._AC_UF1000,1000_QL80_.jpg', 12000, 15),
       ('Basketball Jersey', 'Official team jersey for basketball fans',
        'https://rigorer.com/cdn/shop/products/1_e6900226-7af8-4ccd-8884-38be9b8dd110.jpg?v=1653290275', 3500, 0),
       ('Cycling Helmet', 'Safety first! Stylish helmet for cyclists',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691599741-specialized-tactic-helmet-64d3c37530d87.jpg?crop=1xw:1xh;center,top&resize=980:*',
        2500, 40),
       ('Yoga Mat', 'Non-slip and eco-friendly yoga mat for your practice',
        'https://m.media-amazon.com/images/I/61UA1IMrWsL._AC_UF1000,1000_QL80_.jpg', 3000, 10),
       ('Tennis Balls (Pack of 3)', 'Durable tennis balls for practice and matches',
        'https://m.media-amazon.com/images/I/61KjiuPksML._AC_UF1000,1000_QL80_.jpg', 800, 50),
       ('Football Cleats', 'Spike football cleats for better traction on the field',
        'https://blog.battlesports.com/hubfs/_DSC7116.jpg#keepProtocol', 6000, 20),
       ('Swimming Goggles', 'Anti-fog swimming goggles for clear vision in the water',
        'https://img.fruugo.com/product/9/57/891247579_max.jpg', 1800, 30),
       ('Baseball Glove', 'Premium leather baseball glove for infielders',
        'https://m.media-amazon.com/images/I/81T7QTRWB5L._AC_UF1000,1000_QL80_.jpg', 4500, 15),
       ('Hiking Backpack', 'Spacious backpack with multiple compartments for hiking adventures',
        'https://m.media-amazon.com/images/I/91xOEO-8kUL._AC_UY1000_.jpg', 9000, 10),
       ('Tennis Shoes', 'Court-ready tennis shoes with excellent grip',
        'https://www.dickssportinggoods.com/protips/sports-and-activities/racquet-sports/best-tennis-shoes/_jcr_content/root/container/container_2/image.coreimg.jpeg/1694006964147/protips-thumbnail-besttennisshoes.jpeg',
        5500, 25);


INSERT INTO shopping_cart.cart_items (cart_id, item_id, items_count)
VALUES (1, 3, 0),
       (1, 1, 0),
       (1, 12, 0),
       (1, 2, 3);