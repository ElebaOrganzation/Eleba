/**
 * Created by Administrator on 2018/6/9 0009.
 */
"use strict";
//引入系统模块
const express = require("express");
const router = express.Router();
//引入项目模块
const shopinfoDao = require("../dao/shopinfodao");

router.post("/all",function(req,res){
    shopinfoDao.queryshopinfo(function(results){
        //将数据写出去
        res.json(results);
    })
})
router.post("/shopid",function(req,res){
    shopinfoDao.queryshopinfobyshopid(req.query.shopid,function(results){
        res.json(results);
    })
})


module.exports = router;
