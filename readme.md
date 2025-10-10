# Flight & Search Service

A comprehensive microservice for managing flights, airports, airplanes, and cities in an airline management system. This service handles all flight-related operations including search, booking validation, and flight management.

## 🚀 Features

- Complete CRUD operations for flights, airports, airplanes, and cities
- Advanced flight search and filtering capabilities
- Relational database management with proper foreign key relationships
- Input validation and comprehensive error handling
- RESTful API design with consistent response formats
- Scalable architecture with service separation

## 🛠️ Tech Stack

- **Backend Framework:** Node.js with Express.js
- **Database:** MySQL
- **ORM:** Sequelize
- **Validation:** Express middleware
- **Environment Management:** dotenv
- **Error Handling:** Custom error classes

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn package manager

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=4000
DB_NAME=airline_flights
DB_USERNAME=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_DIALECT=mysql
```

## 🗄️ Database Schema

### Entity Relationship Diagram

```
City (1) ----- (∞) Airport
Airport (1) ----- (∞) Flight (departure)
Airport (1) ----- (∞) Flight (arrival)
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
| availableSeats     | INT       | Not Null                    |
| created_at         | TIMESTAMP | Default: CURRENT_TIMESTAMP  |
| updated_at         | TIMESTAMP | Default: CURRENT_TIMESTAMP  |

## 📡 API Endpoints

### Base URL
```
http://localhost:4000/api/v1
```

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

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/flights`       | Create a new flight        |
| GET    | `/flights`       | List all flights           |
| GET    | `/flights/:id`   | Get flight details         |
| PATCH  | `/flights/:id`   | Update flight details      |
| DELETE | `/flights/:id`   | Delete a flight            |

## 🔄 Service Integration

This service integrates with other airline management services:
- **Booking Service:** Provides flight details and seat availability for bookings
- **Authentication Service:** Validates user tokens for secure operations
- **Reminder Service:** Supplies flight information for notifications

## 🏗️ Project Structure

```
src/
├── config/
│   ├── config.json
│   └── ServerConfig.js
├── controllers/
│   ├── airplane-controller.js
│   ├── airport-controller.js
│   ├── city-controller.js
│   └── flight-controller.js
├── middlewares/
│   ├── flight-middlewares.js
│   └── index.js
├── models/
│   ├── airplane.js
│   ├── airport.js
│   ├── city.js
│   ├── flights.js
│   └── index.js
├── repository/
│   ├── airplane-repository.js
│   ├── airport-repository.js
│   ├── city-repository.js
│   ├── crud-repositories.js
│   ├── flight-repository.js
│   └── index.js
├── routes/
│   ├── index.js
│   ├── v1/
│   │   └── index.js
│   └── v2/
├── services/
│   ├── airplane-service.js
│   ├── airport-service.js
│   ├── city-service.js
│   ├── crud-service.js
│   ├── flight-service.js
│   └── index.js
├── seeders/
│   ├── add-airports.js
│   └── add-airplanes.js
├── utils/
│   └── helper.js
└── index.js
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/nikhilkalburgi45/Flight-And-Search.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run migrations
```bash
npx sequelize-cli db:migrate
```

5. Seed the database (optional)
```bash
npx sequelize-cli db:seed:all
```

6. Start the server
```bash
npm start
```

## 📝 API Response Format

All API responses follow a standard format:

```json
{
    "message": "Success/Error message",
    "success": true/false,
    "error": {},
    "data": {}
}
```

## 🔒 Security Features

- Input validation for all API endpoints
- Error messages don't expose internal details
- Environment variables for sensitive data
- Proper HTTP status codes for different scenarios

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Nikhil Kalburgi** - [GitHub](https://github.com/nikhilkalburgi45)

## 🙏 Acknowledgments

- All contributors who have helped shape this project
- The Node.js and Express.js communities for excellent documentation