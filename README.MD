# Backend CRUD

## Description

This backend project is part of a CRUD (Create, Read, Update, Delete) application for user registration. The technology stack includes Node.js with TypeScript for the backend and integrates with a mongo database. 

## Requirements

- Node.js (v20.11.0)
- npm (v10.4.0)

## Features
#### User Table
- Maintains a table to store user records.
#### User Actions
- Create User: Adds a new user to the system.
- Edit User: Updates user information.
- Delete User: Removes a user from the system.
- List Users: Retrieves a list of all users.
#### Timestamps
- Records the creation, update, and deletion dates for each user.
#### Error Handling
- Implements robust error handling mechanisms in all backend routes to manage and respond to invalid input values.

## Database
The backend uses MongoDB as its chosen database system. MongoDB is a NoSQL database that offers several advantages, making it a suitable choice for this project.

### Why MongoDB?
- Flexibility: MongoDB is a document-based database, allowing the storage of data in a flexible, JSON-like format. This flexibility is advantageous for a dynamic application where data structures may evolve over time.

- Scalability: MongoDB is designed to scale horizontally, making it well-suited for applications that may experience growth in data volume. It supports sharding, which enables the distribution of data across multiple servers.

- JSON-like Documents: MongoDB stores data in BSON format, which is a binary representation of JSON-like documents. This aligns well with the JavaScript and TypeScript ecosystem, making it seamless to work with data in the backend and frontend.

- Community Support: MongoDB has a large and active community, offering extensive documentation, tutorials, and community forums. This ensures that developers can find support and resources when working with the database.

- Open Source: MongoDB is an open-source database, providing cost-effectiveness for projects without the need for expensive licensing fees.

### Installation
#### To run this project with MongoDB:

- Ensure MongoDB is installed on your machine. You can download it from the official [MongoDB website](https://www.mongodb.com/docs/manual/installation/).
- Start the MongoDB server locally.
- Update the connection details in the Prisma configuration to point to your MongoDB instance.

## Run the project
Clone the repository:
```
git clone https://github.com/mayoliveii/backend-crud.git
```

Install dependencies:

```
npm install
```

Run Prisma Studio to open the database:

```
npm run prisma:studio
```

Run the development server:

```
npm run dev
```

## Endpoints

### Create Customer

Endpoint: `POST` / `http://localhost:8000/create-customer`
Description: Creates a new customer record.

Request Body:
name (string): The name of the customer.
email (string): The email address of the customer.
phone (string): The phone number of the customer.

Example Request:

```gql
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123456789"
}
```

### List Customers
Endpoint: `GET` / `http://localhost:8000/list-customers`
Description: Retrieves a list of all customers.


### Delete Customer
Endpoint: `DELETE` / `http://localhost:8000/delete-customer`
Description: Deletes a customer record.

Query Parameters:
id (string): The ID of the customer to be deleted.

Example Request:

```gql
{
  "id": "customer-id-to-delete"
}
```

### Edit Customer
Endpoint: `POST` / `http://localhost:8000/edit-customer`
Description: Edits an existing customer record.

Request Body:
id (string): The ID of the customer to be edited.
name (string): The updated name of the customer.
email (string): The updated email address of the customer.
phone (string): The updated phone number of the customer.

Example Request:
```gql
{
  "id": "customer-id-to-edit",
  "name": "Updated Name",
  "email": "updated.email@example.com",
  "phone": "987654321"
}
```