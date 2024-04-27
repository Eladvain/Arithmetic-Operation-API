# Arithmetic-Operation-API

This is RestFul Api application that implement arithmetic operation such as add, substract, multiply and divide.
The operator will be received in the header in operation variable. In addition in request body we will get 2 numeric numbers and the expected result should return.

This RestApi application is written in nestjs.

In addition pay attention that the application implement auth path.

- To try to run a calculation request, yoh have to do login request.

- All users that exist in the system are in src/users/users.txt path.

- Without Login with valid user you can't do calculation request.

- After user doing valid login request - he gets back valid token for 300s(5 minutes - claim expiration time).

In the project I am implemented unit test and and in order to run these tests - you have to type the command "npm run test:watch".

In the end I implemented Dockerfile and docker-compose.yml file as you can see. In order to run the project with the help of the file, you must run with the command: 

- docker compose up
-  And then in chrome http://localhost:3000/




