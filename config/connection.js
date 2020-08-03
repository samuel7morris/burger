const util = require ("util");
const mysql = require ("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost", 
        user: "root", 
        port: 3306, 
        password: "root", 
        database: "burgers_db"
    })
}

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;