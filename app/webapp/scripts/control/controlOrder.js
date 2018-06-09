(function(angular){
    //创建模块
    var app = angular.module('module.control.order',["ngRoute","module.service.order"]);//placeHolder--order

    //路由处理
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/",{
            controller:"order",
            templateUrl:"../../views/viewOrder.html"
        }).otherwise({
            redirectTo:"/"
        });
    }]);

    app.controller('order',['$scope','$http','orderinfo',function($scope,$http,orderinfo){//placeHolder--profile
        //判断登录状态
        if (window.localStorage.getItem("userid")) {
            $scope.loginstatus=true;
        }else{
            $scope.loginstatus=false;
        }
        //跳转登录页面
        $scope.toLogin=function () {
            if (!$scope.loginstatus) {
                window.location.href="/login.html";
            }
        }
        //获取订单信息
        orderinfo.getOrderinfo(function (orderlist) {
            console.log(orderlist)
        });
    }]);
})(angular);
