/**
 * Created by Administrator on 2018/6/9 0009.
 */
"use strict";
//1.先导入connection数据库的连接
const connection = require("./connection");
//2.声明数据库的连接对象
let conn = connection.conn;

function queryshopinfo(callback){
    conn.query("select * from shopinfo",function(err,results,fields){
        callback(results);
    })
}

module.exports={queryshopinfo};
