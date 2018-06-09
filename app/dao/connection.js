"use strict"

 const mysql = require("mysql");
//获取mysql连接
const conn = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"12345678",
    database:"eleba"
});
conn.connect();

module.exports = {conn};