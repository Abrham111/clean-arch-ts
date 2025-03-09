import { UserController } from './presentation/controllers/UserController';

const userController = new UserController();

userController.create({ name: "John Doe", email: "john.doe@example.com" })
  .then(user => console.log("User created:", user))
  .catch(err => console.error("Error creating user:", err));