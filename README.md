# Clean Architecture TypeScript

This project is a backend system built with TypeScript, following Clean Architecture principles. It includes a `User` entity and demonstrates how to structure an application for maintainability and scalability.

## Features

- User entity creation
- In-memory user repository
- Clean and organized project structure
- TypeScript for type safety

## Technologies Used

- TypeScript
- Node.js
- npm

## Structure overview
```
clean-arch-ts/
└── src/
    ├── application/
    │   └── use-cases/
    │       └── CreateUser.ts
    ├── domain/
    │   ├── entities/
    │   │   └── User.ts
    │   └── repositories/
    │       └── UserRepository.ts
    ├── infrastructure/
    │   └── repositories/
    │       └── InMemoryUserRepository.ts
    ├── presentation/
    │   └── controllers/
    │       └── UserController.ts
    └── main.ts
```
