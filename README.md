# My Fullstack Application

This project is a fullstack application built using Node.js, Express.js, MySQL, and React.js. It is designed to provide a robust platform for managing user authentication, activities, and user data.

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS, and JavaScript with React.js
- **Version Control**: GitHub

## Features

1. **User Authentication**: Secure login and registration with JWT token management.
2. **Activity Management**: CRUD operations for activities.
3. **User Profile Management**: Update and manage user profiles.
4. **RESTful API**: Well-defined endpoints for frontend-backend communication.
5. **Responsive UI**: Built with React.js for a dynamic user experience.
6. **Database Integration**: MySQL for persistent data storage.
7. **TypeScript Support**: Type safety and better development experience.
8. **Version Control**: Managed with GitHub for collaboration and tracking changes.
9. **Middleware Support**: Custom middleware for error handling and authentication checks.
10. **Environment Configuration**: Configurable settings for different environments (development, production).

## Getting Started

### Prerequisites

- Node.js
- MySQL
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up the MySQL database and update the database configuration in `backend/src/database.ts`.

4. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Start the backend server:
   ```
   cd backend
   npm start
   ```

6. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

## API Endpoints

- **Authentication**
  - `POST /api/auth/login`: User login
  - `POST /api/auth/register`: User registration

- **User Management**
  - `GET /api/users`: Get all users
  - `GET /api/users/:id`: Get user by ID
  - `PUT /api/users/:id`: Update user by ID
  - `DELETE /api/users/:id`: Delete user by ID

- **Activity Management**
  - `GET /api/activities`: Get all activities
  - `GET /api/activities/:id`: Get activity by ID
  - `POST /api/activities`: Create a new activity
  - `PUT /api/activities/:id`: Update activity by ID
  - `DELETE /api/activities/:id`: Delete activity by ID

## License

This project is licensed under the MIT License. See the LICENSE file for details.