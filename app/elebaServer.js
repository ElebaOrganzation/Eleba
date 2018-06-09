"use strict"

const express = require("express"),//引用express框架
    bodyParser=require("body-parser"),//引用bodyPaser模块
    userctrl=require("./control/usercontrol.js"),
    orderctrl =require("./control/odercontrol.js");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//获取服务器静态资源
app.use(express.static("./webapp"));


app.get("/",function (req,res) {
});

//路由处理
//登陆校验
app.post("/login",function (req,res) {
    //获取表单提交信息并做校验
    userctrl.loginCheck(res,req.query);
});
app.post("/userinfo",function (req,res) {
    userctrl.getUserinfo(res,req.query);
});
app.post("/addressinfo",function (req,res) {
    userctrl.getAddressinfo(res,req.query);
});
app.post("/orderinfo",function (req,res) {
    orderctrl.getOrderinfo(res,req.query);
})


//监听服务器端口
app.listen(9090,function (err) {
    if (err){
        console.log(err);
    }
    console.log("Server is started!");
})