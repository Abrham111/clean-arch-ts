// Implements the UserRepository interface using an in-memory array to store users.

import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
// save: Adds a new user to the array.
export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
// findById: Searches for a user by ID and returns it or null if not found.
  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }
}