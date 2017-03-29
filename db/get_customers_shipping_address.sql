SELECT ship_address, ship_city, ship_first_name,
ship_last_name, ship_state, ship_zipcode
FROM customer
WHERE id = $1;
