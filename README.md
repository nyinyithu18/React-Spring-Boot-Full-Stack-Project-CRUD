# React-Js-and-Spring-Boot-Full-Stack-Project-CRUD

## Description

```
This project consists of two Applications: One is a Spring Boot RestAPI called spring-backend and another is a react-frontend.
This project is full stack project as a small student management system.
User can perform such as adding, updating, searching and delecting for employees datas in the database.
User can search student datas with Name or NRC.
```

## Spring-backend

  > Spring Boot web java backend application that exposes a Rest API to manage the student datas.

  ### Tech 

  - Spring Boot
  - MyBatis
  - Lombok
  - JDBC
  - Postgres + Database

## React-frontend

  > react-frontend uses Flowbite React UI component as CSS-styled framework and Tailwind CSS.   
  > use Vite React Js  as front-end tool. 

## Configuration

backend

 - Set up a PostgreSQL database and create the necessary tables with sql file.
 - Update the database connection configuration in the **application.properties** file:
    > spring.datasource.url=jdbc:postgresql://your-database-host:your-database-port/your-database-name
    > spring.datasource.username=your-username  
    > spring.datasource.password=your-password       

## Usage

Clone the Repository
```
git clone https://github.com/nyinyithu18/React-Spring-Boot-Full-Stack-Project-CRUD.git
```
```
cd React-Spring-Boot-Full-Stack-Project-CRUD
```

frontend

```
cd frontend
```
Install the modules
```
npm i
```
Start the application
```
npm run dev
```

local host

http://localhost:5173

backend

```
cd backend
```
run the application
```
mvn spring-boot:run
```
test the host
```
http://localhost:8080/studentList
```

