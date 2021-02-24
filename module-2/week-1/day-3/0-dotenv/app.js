// parse and expose the value stored in the .env file
require("dotenv").config();


// process is a global object available everywhere in any node app.
console.log(process.env.toto);