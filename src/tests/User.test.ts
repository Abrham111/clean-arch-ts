import { CreateUser } from '../application/use-cases/CreateUser';
import { UserRepository } from '../domain/repositories/UserRepository';
import { User } from '../domain/entities/User';

// Mock implementation of UserRepository
class MockUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    // Store the user with the provided id
    this.users.push(user);
    return user; // Return the same user object
  }

  async save(user: User): Promise<void> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    } else {
      this.users.push(user);
    }
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find(u => u.id === id);
    return user || null;
  }
}

describe('CreateUser Use Case', () => {
  let createUser: CreateUser;
  let userRepository: MockUserRepository;

  beforeEach(() => {
    userRepository = new MockUserRepository();
    createUser = new CreateUser(userRepository);
  });

  it('should create a user successfully', async () => {
    const user: User = { id: '1', name: 'John Doe', email: 'john@example.com' };
    const result = await createUser.execute(user);
    expect(result).toEqual(user);
  });
});
