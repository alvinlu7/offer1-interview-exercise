# Offer1 Interview Exercise

Real estate listing site with full authenticatiion flow and complete backend functionality.
Features include showing listings, filtering listings, favoriting listings, and sending messages to any user

Backend is built using Express, Sequelize ORM, and PostgreSQL.

Front-end is built with React using TailwindCSS.

## Installation Instructions

Ensure PostgreSQL is installed and running locally

Create a database in PostgreSQL called "offer1"
```
psql
create database offer1;
```

Edit the .env file at the root directory:
Change DB_USER and DB_PASSWORD to your PostgreSQL credentials

Edit ./config/database.json:
Under "development", change username and password to your PostgreSQL credentials

Install packages
```
npm install
```

Run the following commands to initialize and seed the database with test data
```
npm run migrate
npm run seed
```

You're all set! Start the project in development mode with
```
npm start
```
