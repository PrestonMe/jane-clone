CREATE TABLE product (
  id serial primary key,
  name varChar(50),
  description varChar(1000),
  details varChar(300),
  price numeric(6, 2),
  sale numeric(6, 2),
  shipping numeric(4, 2),
  options varChar(1000),
  qty int,
  type varChar(20),
  bUrl varChar(100),
  mUrl varChar(100),
  thumb varChar(100),
  favorites int,
  seller varChar(25),
  sellerImg varChar(100)
);

CREATE TABLE customer (
  id serial primary key,
  fullname varchar(40),
  password varchar(30),
  email varchar(50),
  ship_first_name varchar(20),
  ship_last_name varchar(20),
  ship_address varchar(30),
  ship_city varchar(20),
  ship_state varchar(20),
  ship_zipcode varchar(10),
  bill_first_name varchar(20),
  bill_last_name varchar(20),
  bill_address_one varchar(30),
  bill_address_two varchar(30),
  bill_city varchar(20),
  bill_state varchar(20),
  bill_zipcode varchar(10),
  phonenumber varchar(15)
);

CREATE TABLE cart (
  id serial primary key,
  qty int,
  session_id varchar(40),
  customer_id int references customer,
  product_id int references product
);
