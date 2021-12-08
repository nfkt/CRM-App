//Js Should be executed in "strict mode"
"use strict";

//require express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");

const envConfig = dotenv.config({
    path:
      __dirname + process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`.trim()
        : ".env.sqlite",
  });
  
  
  
  for (const key in envConfig) {
    process.env[key] = envConfig[key];
  }
//Database Connection
const db = require('./Config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})
//create an Express application and Express router.
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));


//Gig routes
app.use('/', require('./Routes/routes'));


//This function is passed to two objects:
//req that represents the request sent from client


const port = process.env.PORT || 3009;
// {force: true}
db.sync().then(() => {
    app.listen(port, console.log(`Server started on port ${port}`));
}).catch(err => console.log("Error: " + err));

