SELECT ship_name, ship_address, ship_city,
ship_state, ship_zipcode
FROM orders
WHERE id = $1;
