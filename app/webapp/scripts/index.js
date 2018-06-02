/**
 * Created by Administrator on 2018/6/1 0001.
 */
//$(function(){angular与jQuery冲突，弃用
    //"use strict";这是页面的脚本文件，不需要严格模式
//  window.onscroll = function(){
        //获取距离页面顶部的距离
        //var t = document.documentElement.scrollTop||document.body.scrollTop;
        //if(t>=100){
        //    $("#search-wrapper").css({display:"none"});
        //    $("#search-wrapper-top").css({display:"block"});
        //}else{
        //    $("#search-wrapper").css({display:"block"});
        //    $("#search-wrapper-top").css({display:"none"});
        //}
//  }
//})
(function(angular){
	var app = angular.module('index',[
		'ngRoute',
		'module.control.index'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo:'/index'});
	}]);
})(angular);
