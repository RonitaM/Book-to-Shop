## Used Technologies

* Back-end: Spring (Boot, Data, Security), JPA / Hibernate, MySQL, JUnit, Developer Tools
* Front-end: HTML, React.js, Redux, Bootstrap, CSS
* Security: JWT, Github
* REST API
* Database: MySQL
* Server Build: Maven
* Client Build: npm

## Features

* Browse books without registering
* Add to cart
* Checkout Page
* Sign in
* Sign up

## How to run the app for the first time

* Go to application.properties file and add your desired database name.
* If you're following the README.md file from the parent directory, your database name should be ecommerce
* If not, you can update accordingly
* Similarly, create a user and change their details in the username and password
* If you're following the parent README.md file, your username will be user and password will be user123
* Next, we need to generate a secret JWT token for verification. Here you can be creative with your keyboard and create your own JWT token. You can verify the token from https://jwt.io/
* If not, go to https://jwt.io/ and get the token recieved on the home page.
* Copy paste the same token and run the app
* If you encounter an alert saying "Full Authentication Required" you will need to login once from the Book-2-store website(React side)
* Dummy login details:
      * Username: 123456789
      * Password: test
* It asks you to login once due to the JWT authorization.
* After getting the authorization and authentication, you may completely run your app
* You will not need to use the dummy data again as the JWT authorization is done only once.

## Happy Shopping!
