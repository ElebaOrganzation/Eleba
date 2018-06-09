"use strict"

const connection=require("./connection");

let conn=connection.conn;

//通过用户名查询数据
function querAddressByUserid(id,callback){
    conn.query("select * from addressinfo where userid = ?",[id],function (err,results,fields) {
        callback(results);
    });
};

module.exports={querAddressByUserid};