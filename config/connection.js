// Require dependencies
var mysql = require('mysql');

// Set the connection object
if (process.env.JAWSDB_URL) {
    // If on Heroku and JawsDB is present, use this
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysq1234',
        database: 'burgers_db'
    });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
