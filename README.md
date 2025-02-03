# **Author** : Makhosetive M Sibanda  
# **Title** : Token Generator App  

## Table of Contents  

- [Overview](#overview)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [Pages and Components](#pages-and-components)  
- [Functional Details](#functional-details)  
- [Backend Integration](#backend-integration)  
- [Installation](#installation)  

## Overview  

This frontend application is designed to interact with the Spring Boot Token Generator System, providing a user-friendly interface for managing tokens, user accounts, and transactions.  

## Technologies Used  

- React.js  

## Features  

- **User registration and login**: Secure user registration and login for users.  
- **Token management**: Users can create and update tokens.  
- **Token transfer**: Generated valid tokens can be transferred between users.  
- **Token Donation**: Generated tokens can be donated to a specific charity.  
- **Local Vendor Purchase**: User tokens can be converted to local currency and used in local stores.  

## Pages and Components  

- **Homepage**: Displays a welcome message and links to the registration and login pages.  
- **Registration page**: Allows users to create new accounts.  
- **Login page**: Allows users to log in to their accounts.  
- **Token Management page**: Displays a list of user tokens, allowing users to create, update, and delete tokens.  
- **Token Transfer page**: Allows users to transfer valid tokens to other users.  
- **Token Donation page**: Allows users to donate generated tokens to a specific charity.  
- **Local Store Purchase page**: Allows users to purchase items in local stores using their tokens.  

## Functional Details  

- The frontend application is built using **React.js**, and the backend system is a **Spring Boot** application.  
- The application communicates with the backend system using **RESTful APIs**.  
- The application uses **JWT (JSON Web Tokens)** for authentication and authorization.  

## Backend Integration  

The backend system is developed using **Spring Boot** and **Spring Data JPA**.  
The application exposes RESTful APIs for user registration, login, token management, token transfer, token donation, and local store purchase.  

| Method | Endpoint                          | Description |
|--------|-----------------------------------|-------------|
| **GET** | `/api/users/allUsers`             | Retrieve all users |
| **GET** | `/api/users/{id}`                 | Retrieve a user by ID |
| **GET** | `/api/tokens/`                    | Retrieve all tokens |
| **GET** | `/api/tokens/{id}`                | Retrieve a token by ID |
| **POST** | `/api/tokens/generateToken/`      | Generate a new token |
| **POST** | `/api/users/register`             | Register a new user |
| **POST** | `/api/tokens/TokenTransfer`       | Transfer tokens between users |
| **POST** | `/api/tokens/createDonation`      | Create a token donation |
| **POST** | `/api/tokens/localVendor/purchase` | Use tokens for purchases |
| **DELETE** | `/api/users/{id}`                 | Delete a user |
| **DELETE** | `/api/tokens/delete/{id}`         | Delete a token |

## Installation

To install and run the frontend application:

1. Install Node.js and npm if you haven't already.
2. Clone the frontend repository:
   ```
   git clone https://github.com/Makhosetive7/token_generator.git
   ```

3. Navigate to the frontend directory:
   ```
   cd token_generator
   cd frontend
   ```

4. Install the required dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm start
   ```
   The frontend application will be accessible at http://localhost:3000.
   ```
 
 
