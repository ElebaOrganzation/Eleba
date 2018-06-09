"use strict"

const ordergoodsdao = require("../dao/ordergoodsdao.js");//引入dao文件

function getOrdergoods(fields){
    ordergoodsdao.queryGoodsByOrderid(fields.userid,function (results) {
        console.log(goods);
    })
}

module.exports={getOrdergoods};