'use strict'

const express = require('express');

const goodsinfodao = require('../dao/goodsinfodao');

const router = express.Router();

router.post('/menu',function(req,res){
	goodsinfodao.getMenuByShopid(req.body.id,function(results){
        if (!results.length){
        	
		}else{
			res.json(results);
		}
	});
});