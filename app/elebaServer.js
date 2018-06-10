"use strict"

const express = require("express"),//引用express框架
    bodyParser=require("body-parser");//引用bodyPaser模块
//导入路由模块
const routeUser = require("./routes/routeUserinfo"),
    routeOrder = require('./routes/routeOrderinfo');
const shopinfoRoute = require("./routes/shopinforoute.js");
const routeGoodsinfo = require("./routes/routeGoodsinfo.js");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//获取服务器静态资源
app.use(express.static("./webapp"));


app.get("/",function (req,res) {
    // req.location("/index.html");
});

//路由处理
//登陆校验
app.post("/login",function (req,res) {
    //获取表单提交信息并做校验
    userctrl.loginCheck(res,req.query);
});

//路由操作
app.use("/shopinfo",shopinfoRoute);
app.use("/userinfo",routeUser);
app.use("/orderinfo",routeOrder);
app.use("/goods",routeGoodsinfo);


//监听服务器端口
app.listen(9090,function (err) {
    if (err){
        console.log(err);
    }
    console.log("Server is started!");
})