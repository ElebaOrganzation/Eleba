"use strict"
//引入模块
const express = require('express'),
    userinfodao=require('../dao/userinfodao'),
    addressinfodao = require('../dao/addressinfodao');
// 获取路由对象
const router = express.Router();
//登录校验
router.post('/check',function (req,res) {
    userinfodao.queryUserByName(req.query.name,function(results) {
        if (results.length==0){
            return res.json({result:'fault',desc:'0'});
        }else{
            let result = results[0];
            if (result.pwd===req.query.pwd) {
                return  res.json({result:'success',desc:'1',userid:result.id});
            }else{
                return   res.json({result:'fault',desc:'2'});
            }
        }
    });
});
//获取用户信息
router.post('/get',function (req,res) {
    userinfodao.queryUserByName(req.query.name,function(results) {
        if (!results.length){
            res.json({result:'fault',desc:'0'});
        }else{
            let result = results[0];
            res.json({
                result:'success',
                desc:'1',
                userid:result.id,
                balance:result.balance,
                tell:result.tell
            });
        }
    });
});
//获取用户地址信息
router.post('/address',function (req,res) {
    addressinfodao.querAddressByUserid(req.query.userid,function(results) {
        let addresslist =[];
        if (results.length==0){
            console.log("找不到地址信息！");
            res.json({result:'null'});
        }else{
            // 保存查询到的数据
            for (var i=0;i<results.length;i++){
                addresslist[addresslist.length]=results[i];
            }
            res.json(addresslist);
        }
    });
})

// 将路由对象导出
module.exports = router;