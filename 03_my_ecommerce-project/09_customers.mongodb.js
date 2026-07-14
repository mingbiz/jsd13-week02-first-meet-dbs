use ("my_ecommerce_db");
//clear existing data
db.customers.deleteMany({});
// Insert mock data for Customers collection
db.customers.insertMany([
  {   "_id": ObjectId("65f100000000000000000001"),
    "first_name": "Jane",
    "last_name": "Doe",
    "customer_email": "jane.doe@email.com",
    "customer_phone": "123-456-7890",
    "customer_type": "Regular"
  },
  {
    "_id": ObjectId("65f100000000000000000002"),
    "first_name": "John",
    "last_name": "Smith",
    "customer_email": "john.smith@email.com",
    "customer_phone": "234-567-8901",
    "customer_type": "VIP"
  },
  {
    "_id": ObjectId("65f100000000000000000003"),
    "first_name": "Emily",
    "last_name": "Jones",
    "customer_email": "emily.jones@email.com",
    "customer_phone": "345-678-9012",
    "customer_type": "Regular"
  },
  {
    "_id": ObjectId("65f100000000000000000004"),
    "first_name": "Chris",
    "last_name": "Williams",
    "customer_email": "chris.williams@email.com",
    "customer_phone": "456-789-0123",
    "customer_type": "Regular"
  }
]);

db.customers.find({});    
