# Airline Management System - Backend

## �� Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
  - [Entity Relationship Diagram](#entity-relationship-diagram)
  - [Table Structures](#table-structures)
- [API Documentation](#api-documentation)
  - [City Endpoints](#city-endpoints)
  - [Airport Endpoints](#airport-endpoints)
  - [Airplane Endpoints](#airplane-endpoints)
  - [Flight Endpoints](#flight-endpoints)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Code Style](#code-style)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Overview

The Airline Management System is a robust backend solution designed to handle core airline operations. It provides a comprehensive set of APIs for managing cities, airports, airplanes, and flights, with a focus on data integrity and relationship management.

## ✨ Features

- Complete CRUD operations for all entities
- Relational database management
- Input validation and error handling
- RESTful API design
- Scalable architecture
- Secure data management

## 🛠 Tech Stack

- **Backend Framework:** Node.js with Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Validation:** Express middleware
- **Environment Management:** dotenv
- **API Documentation:** Swagger/OpenAPI

## 🏁 Getting Started

### Prerequisites

- Node.js (>= 14.x.x)
- PostgreSQL (>= 12.x.x)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd airline-backend-system
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure your database credentials in `.env`

### Running the Application

1. Run database migrations:

```bash
npx sequelize-cli db:migrate
```

2. Seed the database (optional):

```bash
npx sequelize-cli db:seed:all
```

3. Start the server:

```bash
npm start
```

The server will be available at `http://localhost:3000`

## 📊 Database Schema

### Entity Relationship Diagram

```
City (1) ----- (∞) Airport
Airport (1) ----- (∞) Flight
Flight (∞) ----- (1) Airplane
```

### Table Structures

#### City Table

| Column     | Type      | Constraints                |
| ---------- | --------- | -------------------------- |
| id         | INT       | PK, Auto-increment         |
| name       | STRING    | Unique, Not Null           |
| created_at | TIMESTAMP | Default: CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP | Default: CURRENT_TIMESTAMP |

#### Airport Table

| Column     | Type      | Constraints                |
| ---------- | --------- | -------------------------- |
| id         | INT       | PK, Auto-increment         |
| name       | STRING    | Not Null                   |
| address    | STRING    | Not Null                   |
| city_id    | INT       | FK (References City.id)    |
| created_at | TIMESTAMP | Default: CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP | Default: CURRENT_TIMESTAMP |

#### Airplane Table

| Column      | Type      | Constraints                |
| ----------- | --------- | -------------------------- |
| id          | INT       | PK, Auto-increment         |
| modelNumber | STRING    | Not Null                   |
| capacity    | INT       | Not Null, Default: 200     |
| created_at  | TIMESTAMP | Default: CURRENT_TIMESTAMP |
| updated_at  | TIMESTAMP | Default: CURRENT_TIMESTAMP |

#### Flight Table

| Column             | Type      | Constraints                 |
| ------------------ | --------- | --------------------------- |
| id                 | INT       | PK, Auto-increment          |
| flightNumber       | STRING    | Unique, Not Null            |
| airplaneId         | INT       | FK (References Airplane.id) |
| departureAirportId | INT       | FK (References Airport.id)  |
| arrivalAirportId   | INT       | FK (References Airport.id)  |
| departureTime      | DATETIME  | Not Null                    |
| arrivalTime        | DATETIME  | Not Null                    |
| price              | INT       | Not Null                    |
| boardingGate       | STRING    | Optional                    |
| totalSeats         | INT       | Not Null                    |
| created_at         | TIMESTAMP | Default: CURRENT_TIMESTAMP  |
| updated_at         | TIMESTAMP | Default: CURRENT_TIMESTAMP  |

## 📚 API Documentation

### City Endpoints

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/city`     | Create a new city   |
| GET    | `/city/:id` | Get city details    |
| GET    | `/city`     | List all cities     |
| PATCH  | `/city/:id` | Update city details |
| DELETE | `/city/:id` | Delete a city       |

### Airport Endpoints

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| POST   | `/airports`     | Create a new airport   |
| GET    | `/airports/:id` | Get airport details    |
| GET    | `/airports`     | List all airports      |
| PATCH  | `/airports/:id` | Update airport details |
| DELETE | `/airports/:id` | Delete an airport      |

### Airplane Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/airplanes`     | Create a new airplane   |
| GET    | `/airplanes/:id` | Get airplane details    |
| GET    | `/airplanes`     | List all airplanes      |
| PATCH  | `/airplanes/:id` | Update airplane details |
| DELETE | `/airplanes/:id` | Delete an airplane      |

### Flight Endpoints

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| POST   | `/flights` | Create a new flight |
| GET    | `/flights` | List all flights    |

## 💻 Development

### Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── middleware/     # Custom middleware
├── utils/          # Utility functions
└── app.js          # Application entry point
```

### Code Style

- Follow ESLint configuration
- Use meaningful variable names
- Write clear comments
- Follow REST API best practices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
