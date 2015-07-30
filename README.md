#SailsJs Token Based Authentication Setup

## Globals
    $ npm install --save sails

## Create a sails app
    $ sails new myApp
    $ cd myApp

## Files
1 ) Copy every file to its corresponding folder

2 ) Add this to config/policies.js

    '*': "hasToken",
    UserController: {
        "create": true
    },
    AuthController: {
        '*': true
    }

3 ) Change the value of config/tokenSecret.js

## Install Dependencies

    $ npm install --save passport
    $ npm install --save passport-local
    $ npm install --save bcrypt-nodejs
    $ npm install --save jsonwebtoken
    $ npm install --save express-jwt
