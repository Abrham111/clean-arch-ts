// Defines a use case for creating a user.
// Takes a request object with name and email properties.
// The execute method creates a new user and saves it using the repository.

import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

interface CreateUserRequest {
  name: string;
  email: string;
}

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<User> {
    const user = User.create(Date.now().toString(), request.name, request.email);
    await this.userRepository.save(user);
    return user;
  }
}