# API for application

API is written in Java Spring. This api is only helper to delivery a high-end frontend application.

### Prerequisites
- Postgres
- Java 21

### Environment variables
- `APP_PORT` - Port for API backend, default is `4000`
- `DATABASE_URL` - database URL without postgres, default is `localhost:5432/bgo`
- `DATABASE_USERNAME` - username of database client, default is `postgres`
- `DATABASE_PASSWORD` - password of database client, default is `root`

### Getting Started

1. Before starting an application, make sure your postgres is installed and works perfectly fine.
2. Change environment variables or create user and database like default values above.
3. Start API with command
```
java -jar api.jar
```

Enjoy!