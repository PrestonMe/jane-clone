INSERT INTO orders (customer_id, ship_name, ship_address, ship_city, ship_state, ship_zipcode)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id;
