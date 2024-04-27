# Arithmetic-Operation-API

This is RestFul Api application that implement arithmetic operation such as add, substract, multiply and divide.
The operator will be received in the header in operation variable. In addition in request body we will get 2 numeric numbers and the expected result should return.

This RestApi application is written in nestjs.

In addition pay attention that the application implement auth path.

- To try to run a calculation request, yoh have to do login request.

- All users that exist in the system are in src/users/users.txt path.

- Without Login with valid user you can't do calculation request.

- After user doing valid login request - he gets back valid token for 300s(5 minutes - claim expiration time).


