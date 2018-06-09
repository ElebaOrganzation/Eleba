"use strict"

const orderinfodao = require("../dao/orderinfodao"),//引入dao文件
    ordergoodsdao = require("../dao/ordergoodsdao");

function getOrderinfo(res,fields){
    let orderlist=[];
    orderinfodao.queryOrderByUserid(fields.userid,function (results) {
        for (let i=0;i<results.length;i++){
            //获取订单商品信息
            let ordergoodslist = [];
            ordergoodsdao.queryGoodsByOrderid(results[i].id,function (goodsresults) {
                if (goodsresults.length==0){
                    console.log(results[i].id+"号订单没有商品！");
                }else{
                    for (let j = 0;j<goodsresults.length;j++) {
                        ordergoodslist[ordergoodslist.length] = goodsresults[j];
                    }
                }
            });
            //组织完整订单信息
            let orderinfo = {
                shopname:results.name,
                date:results.date,
                status:results.status,
                goodslist:ordergoodslist
            }
            //添加到订单列表
            orderlist[orderlist.length]=orderinfo;
        }
        //发送到客户端
        res.json(orderlist);
    })
}

module.exports={getOrderinfo};