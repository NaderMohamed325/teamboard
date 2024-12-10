# Team Dashboard

This project is a web application for managing team members and their information. It allows users to view, update, and delete team member details.

## Features

- View all team members
- Update team member information
- Delete team members

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Pug (for templating)
- JavaScript
- CSS

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/NaderMohamed325/team-dashboard.git
    cd team-dashboard
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```env
        DATABASE_URL=<your url>
        DATABASE_PASSWORD=<your password>
        ```

4. Start the application:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You will see the home page with a welcome message.
3. Navigate to `/users` to view the user dashboard.
4. You can update or delete user information directly from the dashboard.

## Project Structure

- `app.js`: Main application setup and middleware configuration.
- `server.js`: Server setup and database connection.
- `controller/userController.js`: Controller functions for handling user-related operations.
- `models/userModel.js`: Mongoose schema and model for users.
- `routes/userRouter.js`: Express router for user-related routes.
- `views/`: Directory containing Pug templates for rendering HTML.
- `views/css/style.css`: CSS file for styling the application.

