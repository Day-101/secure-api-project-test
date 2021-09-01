**Hi everyone!**

  

I'm a junior developer and this is a technical **Node.JS** exercise with a **MongoDB** database.

  

You can just register an account with an email, a password and take a look to others account but I think that my code is pretty good.

  

**/!\ To use it, don't forget to create your own MongoDB database, a .env file in config/ and define PORT, CLIENT_URL, DB_USERNAME, DB_PASSWORD and TOKEN_SECRET.**

  

- **$ npm i**

Install the app

  

- **$ npm start**

Runs the app in the development mode.

  

With a software like ***Postman*** you can test it.

  

**Create a new user :**

(POST) http://localhost:5000/api/user/register

{"email": "example@yopmail.com", "password": "yourPassword"}

  

**Login :**

(POST) http://localhost:5000/api/user/login

{"email": "example@yopmail.com", "password": "yourPassword"}

  

**Logout :**

(GET) http://localhost:5000/api/user/logout
