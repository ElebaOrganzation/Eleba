"use strict"
//引入模块
const express = require('express'),
    orderinfodao = require("../dao/orderinfodao"),//引入dao文件
    ordergoodsdao = require("../dao/ordergoodsdao");
// 获取路由对象
const router = express.Router();

router.post('/get',function (req,res) {
    //保存订单信息列表
    let orderlist=[];
    orderinfodao.queryOrderByUserid(req.query.userid,function (results) {
        for (let i = 0; i < results.length; i++) {
            //获取订单商品信息
            let ordergoodslist = [];
            ordergoodsdao.queryGoodsByOrderid(results[i].id, function (goodsresults) {
               console.log(results[i].id);
                if (goodsresults.length == 0) {
                    console.log(results[i].id + "号订单没有商品！");
                } else {
                    for (let j = 0; j < goodsresults.length; j++) {
                        ordergoodslist[ordergoodslist.length] = goodsresults[j];
                    }
                    //组织完整订单信息
                    let orderdata = {
                        shopname: results[i].name,
                        date: results[i].date,
                        status: results[i].status,
                        shopid:results[i].shopid,
                        goodslist: ordergoodslist
                    }
                    //添加到订单列表
                    orderlist[orderlist.length] = orderdata;
                }
            });
        }
        console.log(orderlist);
        //发送到客户端
        res.json(orderlist);
    });
});


// 将路由对象导出
module.exports = router;