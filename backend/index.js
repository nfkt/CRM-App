//Js Should be executed in "strict mode"
"use strict";

const dotenv = require("dotenv");
const loaders = require('./loaders/index');

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
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

loaders.app.use('/', require('./Routes/routes'));


const port = process.env.PORT || 3009;
// {force: true}
db.sync().then(() => {
    loaders.app.listen(port, console.log(`Server started on port ${port}`));
}).catch(err => console.log("Error: " + err));

