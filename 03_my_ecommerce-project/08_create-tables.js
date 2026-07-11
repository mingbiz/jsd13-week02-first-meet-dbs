CREATE TABLE customer (
     customer_id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
         contact_person VARCHAR(255),
         phone_number VARCHAR(20)
     );