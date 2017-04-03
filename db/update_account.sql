UPDATE customer
SET fullname = $1, email = $2
WHERE id = $3;
