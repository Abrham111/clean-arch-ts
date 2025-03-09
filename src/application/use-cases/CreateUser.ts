import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

interface CreateUserRequest {
  id: string;
  name: string;
  email: string;
}

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<User> {
    const user = new User(request.id, request.name, request.email);
    await this.userRepository.save(user);
    return user;
  }
}