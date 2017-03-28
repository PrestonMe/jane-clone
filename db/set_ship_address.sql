UPDATE CUSTOMER
SET ship_first_name = $1,
ship_last_name = $2,
ship_address = $3,
ship_city = $4,
ship_state = $5,
ship_zipcode = $6
where id = $7
RETURNING *;
