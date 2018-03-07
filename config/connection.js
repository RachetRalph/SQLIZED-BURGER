// MySQL connection setup // 
var mysql = require("mysql"); 

// Create the MySQL connection object
var connection = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
    }); 

connection.connect(function (err) { 
    if (err) { 
        console.error("error connecting: " + err.stack); 
        return; 
    } 
    console.log("connected as id " + connection.threadId); 
}); 

module.exports = connection;

