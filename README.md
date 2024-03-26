# Task-Manager Server

This is the server-side code for a task management application, which allows users to create, manage, and track their tasks. This README provides an overview of the project and instructions for setting up and running the server.

## Features

- User authentication: Users can create accounts, log in, and authenticate their requests.
- Task management: Users can create, update, delete, and retrieve tasks.
- Task assignment: Users can assign tasks to themselves or other users.
- Task filtering and sorting: Users can filter and sort tasks based on various criteria, such as priority, due date, or status.
- User management: Administrators can manage user accounts, including creating, updating, and deleting users.

## Technologies Used

- Node.js: A JavaScript runtime environment.
- Express.js: A web application framework for Node.js.
- PostgreSQL: document database for storing task and user data.
- JSON Web Tokens (JWT): For user authentication and authorization.
- bcrypt: For hashing and salting passwords.

## Getting Started

Follow the instructions below to set up and run the server:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd task-manager-server`
3. Install the dependencies: `npm i nodemon`
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables in the `.env` file:
     - `PORT`: The port number for the server (e.g., 3000).
     - `POSTGRE_URI`: The connection URI for your PostgreSQL database.
     - `JWT_SECRET`: A secret key for JWT token generation.
5. Start the server: `nodemon index`

The server should now be running on the specified port.

## API Documentation

For detailed information about the API endpoints and request/response formats, please refer to the [API Documentation](api-docs.md) file.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow the guidelines outlined in the [CONTRIBUTING](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
