 ## Spring React app

To run this app

 1. Clone the repository and unzip in your Spring Tool Suite
 2. Make sure MySQL is running in your system
 3. Next go to this src/main/resources/application.properties file and change your database name, username and password
 4. Once completed, run the spring boot app
 5. To run the react app, go the location src/main/webapp/reactjs and enter the command "npm start"
 6. Then go to http://localhost:3000/ you will get the page.


## Running it along with the client side

 1. When running it along with client side, make sure you change the port ID and deploy it on that port, else Hibernate and JPA fails to start
 2. If you do not want to do that, you can access the admin side first and then go to client side
 3. On admin side, we can:
    * View all order details
    * View all user details
    * View all category details
    * Perform CRUD operations on book details
    * View Book Details
 4. For beginning the project, there are some dummy data added into mysql, for beginning the project.
 5. If you do not want to add those data, then you can go into the admin side to set them up.
 6. You *must* use the same database and username and password as clientside.






