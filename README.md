# Book-to-Shop
An end-to-end ecommerce project with Springboot as backend and React as Frontend

# How to run it on localhost


Create a database and a user in mysql terminal

```bash

CREATE DATABASE ecommerce
CREATE USER 'user'@'localhost' identified by 'user123'
GRANT ALL ON ecommerce.* to 'user'@'localhost'

```

**You can choose any database name and any username, make sure you update accordingly**

To run the app

 1. Clone the repository and unzip in your Spring Tool Suite
 2. Make sure MySQL is running in your system
 3. Next go to this src/main/resources/application.properties file and change your database name, username and password
 4. Once completed, run the spring boot app
 5. To run the react app, go the location src/main/webapp/reactjs and enter the command "npm start"
 6. Then go to http://localhost:3000/ you will get the page.
 7. To check the high-level design of the system go to Frontend > Screenshots 
 8. To check the database design go to Backend > Jnaapti
 9. For the mysql file, which *must* be run on your mysql terminal before running the project go to Backend > MySQL
