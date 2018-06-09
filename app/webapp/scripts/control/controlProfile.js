(function(angular){
    //创建模块
    var app = angular.module('module.control.profile',["ngRoute","module.service.profile"]);//placeHolder--profile

    //路由处理
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/",{
            controller:"profile",
            templateUrl:"../../views/viewProfile.html"
        }).otherwise({
            redirectTo:"/"
        });
    }]);

    app.controller('profile',['$scope','$http','userinfo','addressinfo',function($scope,$http,userinfo,addressinfo){//placeHolder--profile
        //修改用户名
        if (window.localStorage.getItem("username")) {
            $scope.username = window.localStorage.getItem("username");
            $scope.loginstatus=true;
        }else{
            console.log("登录/注册");
            $scope.username= "登录/注册";
            $scope.loginstatus=false;
        }
        //跳转登录页面
        $scope.toLogin=function () {
            if (!$scope.loginstatus) {
                window.location.href="/login.html";
            }
        }
        //退出登录状态
        $scope.exit=function(){
            window.localStorage.removeItem("userid");
            window.localStorage.removeItem("username");
            window.location.href="/profile.html";
        }
        //获取用户信息
        userinfo.getUserinfo(function (userinfo) {
            $scope.tell=userinfo.tell;
            $scope.balance=userinfo.balance;

        });
        //  获取用户地址信息
        addressinfo.getAddressinfo(function (addressinfo) {
            $scope.addresslist=addressinfo;
        })
    }]);
})(angular);
