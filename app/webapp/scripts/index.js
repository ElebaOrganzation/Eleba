/**
 * Created by Administrator on 2018/6/1 0001.
 */
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

//$(function(){
//    window.onscroll = function(){
//        //获取距离页面顶部的距离
//        var t = document.documentElement.scrollTop||document.body.scrollTop;
//        if(t>=100){
//            $("#search-wrapper").css({display:"none"});
//            $("#search-wrapper-top").css({display:"block"});
//            //去顶部的显示出来
//            $(".ToTop_image").css({display:"block"})
//            //去顶部的点击事件
//            $(".ToTop_image").on("click",function(){
//                console.log("点击了");
//                document.body.scrollTop = document.documentElement.scrollTop = 0;
//            })
//        }else{
//            $("#search-wrapper").css({display:"block"});
//            $("#search-wrapper-top").css({display:"none"});
//            //去顶部的隐藏出来
//            $(".ToTop_image").css({display:"none"})
//        }
//    }
//})

