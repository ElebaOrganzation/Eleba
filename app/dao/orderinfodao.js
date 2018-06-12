"use strict"

const connection=require("./connection");

let conn=connection.conn;

//通过用户id查询订单数据
function queryOrderByUserid(userid,callback){
    conn.query("select t1.id,t1.shopid,t2.name,t2.imgsrc,t1.date,t1.status from orderinfo t1 INNER JOIN shopinfo t2 on t1.shopid=t2.id where t1.userid=? ORDER BY t1.date desc",[userid],function (err,results,fields) {
        callback(results);
    });
};
//插入一条订单数据
function insertOrder(userid,shopid,date,callback){
    conn.query("insert into orderinfo (userid,shopid,date) values(?,?,?)",[userid,shopid,date],function  (err,results,fields) {
        callback(results);
    });
}
module.exports={queryOrderByUserid,insertOrder};