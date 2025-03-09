// Defines a User class that models a user with properties for id, name, and email.
export class User {
  constructor(public id: string, public name: string, public email: string) {}
// The create method is a factory method for instantiating new users, ensuring they have the necessary properties.
  static create(id: string, name: string, email: string): User {
    return new User(id, name, email);
  }
}