"use strict"

const userinfodao = require("../dao/userinfodao");//引入dao文件
const addressinfodao = require("../dao/addressinfodao")

// 登陆校验
function  loginCheck(res,fields){
    userinfodao.queryUserByName(fields.name,function(results) {
        if (results.length==0){
            return res.json({result:'fault',desc:'0'});
        }else{
            let result = results[0];
            if (result.pwd===fields.pwd) {
                return  res.json({result:'success',desc:'1',userid:result.id});
            }else{
                return   res.json({result:'fault',desc:'2'});
            }
        }
    });
}
//获取用户数据
function  getUserinfo(res,fields){
    userinfodao.queryUserByName(fields.name,function(results) {
        if (results.length==0){
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
}
//获取用户地址信息
function getAddressinfo(res,fields){
    addressinfodao.querAddressByUserid(fields.userid,function(results) {
        let addresslist =[];
        if (results.length==0){
            console.log("找不到地址信息！");
            res.json({result:'null'});
        }else{
            // 保存查询到的数据
            for (var i=0;i<results.length;i++){
                let addressinfo = results[i];
                addresslist[addresslist.length]=addressinfo;

            }
            res.json(addresslist);
        }
    });
}

module.exports={loginCheck,getUserinfo,getAddressinfo};