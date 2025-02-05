# **Author** : Makhosetive M Sibanda
# **Title** : Token Generator App

### Table of Contents

- [Overview] (#Overview)
- [Technologies_Used] (#Technologies-Used)
- [Features] (#Features)
- [Pages_and_components] (#Pages-and-Components)
- [Functional_details] (#Functional-Details)
- [BackEnd_Integration] (#Backend-Integration)
- [Installation] (#Installation)


## Overview

This frontend application is designed to interact with the spring-boot Token Generator System, providing a user-friendly interface for managing tokens, user accounts, and transactions.

##   Technologies Used:

- React.js
- Axios
- React Router Dom
- Styled Components
- React-Router-Dom
- React RTK Query (RTKQ)
- Prototypes
- React Helmet
- React-Toastify
- react icons
- Lodash
- Redux 
- React-redux
- Moment.js
- Formik
- Framer Motion

## Features

- User registration and login: secure user registration and login for users.
- Token management: Users can create, update tokens.
- Token transfer: Generated valid tokens can be transferred between users.
- Token Donation: Generated tokens can be donated to a specific charity.
- Local Vendor Purchase: User Tokens can be converted to local currency and be used to purchase in local stores.

## Pages and Components

- Homepage: Displays a welcome message and links to the registration and login pages
- Registration page: Allows users to create new accounts
- Login page: Allows users to log in to their accounts
- Token Management page: Displays a list of user tokens, allowing users to create, update, and delete tokens
- Token Transfer page: Allows users to transfer valid tokens to other users
- Token Donation page: Allows users to donate generated tokens to a specific charity
- Local Store Purchase page: Allows users to purchase items in local stores using their tokens


## Functional Details

- The frontend application is built using React.js, and the backend system is a Spring Boot application.
- The application communicates with the backend system using RESTful APIs.
- The application uses JWT (JSON Web Tokens) for authentication and authorization.


## Backend Integration

- The backend system is developed using Spring Boot and Spring Data JPA.
- The application exposes RESTful APIs for user registration, login, token management, token transfer, token donation, and local store purchase.


| Method | Endpoint                          |
| ------ | --------------------------------- |
| GET    | `/api/users/allUsers`             |
| GET    | `/api/users/{id}`                 |
| GET    | `/api/tokens/`                    |
| GET    | `/api/tokens/{id}`                |
| POST   | `/api/tokens/generateToken/`      |
| POST   | `/api/users/register`             |
| POST   | `/api/tokens/TokenTransfer`       |
| POST   | `/api/tokens/createDonation`      |
| POST   | `api/tokens/localVendor/purchase` |
| DELETE | `/api/users/{id}`                 |
| DELETE | `/api/tokens/delete/{id}`         |

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