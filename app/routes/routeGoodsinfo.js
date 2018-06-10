'use strict'

const express = require('express');

const goodsinfodao = require('../dao/goodsinfodao');

const router = express.Router();

router.post('/menu',function(req,res){
	console.log(req.query);
	if(!req.query){
		goodsinfodao.getMenuByShopid(req.query.shopid,function(results){
			console.log('12'+results);
	        if (!results.length){
	        	
			}else{
				res.json(results);
			}
		});
	}
});
module.exports = router;

