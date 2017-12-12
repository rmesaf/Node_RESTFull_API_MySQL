var sql = require("mysql");

//connection String
var dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'batman',
    database: 'test'
};S

var connection = sql.createPool(dbConfig);

module.exports=connection;


