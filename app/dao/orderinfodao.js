"use strict"

const connection=require("./connection");

let conn=connection.conn;

//通过用户id查询订单数据
function queryOrderByUserid(userid,callback){
    conn.query("select t1.id,t2.name,t1.date,t1.status from orderinfo t1 INNER JOIN shopinfo t2 on t1.shopid=t2.id where t1.userid= ? ORDER BY t1.date desc",[userid],function (err,results,fields) {
        callback(results);
    });
};

module.exports={queryOrderByUserid};