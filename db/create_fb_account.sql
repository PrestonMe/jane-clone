INSERT INTO customer (fullname, email)
VALUES ($1, $2)
RETURNING *;
