// Implements a controller that handles user-related requests.
// Initializes a CreateUser use case with an in-memory user repository.
// The create method processes incoming requests to create a user.

import { CreateUser } from '../../application/use-cases/CreateUser';
import { InMemoryUserRepository } from '../../infrastructure/repositories/InMemoryUserRepository';

export class UserController {
  private createUser: CreateUser;

  constructor() {
    const userRepository = new InMemoryUserRepository();
    this.createUser = new CreateUser(userRepository);
  }

  async create(req: { name: string; email: string }) {
    const user = await this.createUser.execute(req);
    return user;
  }
}