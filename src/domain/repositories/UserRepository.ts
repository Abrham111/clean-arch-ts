// Defines an interface for user data access, specifying methods for saving a user and finding a user by ID.
import { User } from '../entities/User';
// This abstraction allows for different implementations (like in-memory or database-backed) without changing the application logic.
export interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}