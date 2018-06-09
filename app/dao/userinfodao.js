"use strict"

const connection=require("./connection");

let conn=connection.conn;

//通过用户名查询数据
function queryUserByName(name,callback){
    conn.query("select * from userinfo where name = ?",[name],function (err,results,fields) {
        callback(results);
    });
};

module.exports={queryUserByName};