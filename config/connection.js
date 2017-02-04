//setup the code to connect Node to MySQL
//Export the connection.

var mysql = require("mysql");

// First you need to create a connection to the db
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db",
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connection established as id ' + connection.threadId);
});

module.exports = connection;




