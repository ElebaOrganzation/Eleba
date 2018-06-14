(function(angular){
    //创建模块
    var app = angular.module('module.control.profile',["ngRoute","module.service.profile"]);//placeHolder--profile

    //路由处理
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/profile",{
            controller:"profile",
            templateUrl:"../../views/viewProfile.html"
        });
    }]);

    app.controller('profile',['$scope','userinfo','addressinfo',function($scope,userinfo,addressinfo){//placeHolder--profile
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
            window.location.reload();
        }
        //获取用户信息
        userinfo.getUserinfo(function (userinfo) {
            $scope.tell=userinfo.tell;
            $scope.balance=userinfo.balance;

        });
        //  获取用户地址信息
        ($scope.showAddressinfo=function(){
            addressinfo.getAddressinfo(function (addressinfo) {
                if (addressinfo.result=='null') {
                    $scope.addresslist=[];
                    return;
                }
                $scope.addresslist=addressinfo;
            });
        })();
        // 修改地址信息
        $scope.modal=false;
        $scope.showmodel=function(id,text){
            $scope.editId=id;
            $scope.modalTitle="修改地址";
            $scope.oldaddress='原内容：'+text;
            if (id=='insert') {
                $scope.modalTitle="新增地址信息";
                $scope.oldaddress=''
            }
            $scope.newaddress="";
            $scope.modal=true;

        }
        //隐藏模态框
        $scope.hidemodal = function () {
            $scope.modalTitle="";
            $scope.oldaddress="";
            $scope.modal = false;
        }
        //确认修改地址
        $scope.comfirmEdit=function(operation){
            //判断是否为空
            if (!$scope.newaddress){
                alert("更新内容不能为空！");
                return;
            }
            if (operation!="insert"){
                addressinfo.updateAddressinfo($scope.editId,$scope.newaddress,function (res) {
                    console.log(res);
                    if (res.result=="default"){
                        alert("服务器异常，修改失败。");
                    }
                })
            }else{
                //获取提交数据
                var addressdata ={
                    userid:window.localStorage.getItem("userid"),
                    address:$scope.newaddress
                }
                addressinfo.insertAddressinfo(addressdata,$scope.newaddress);
            }
            //刷新界面
            $scope.showAddressinfo();
            $scope.hidemodal();
        }

        //删除地址信息
        $scope.deleteAddr=function(id){
            addressinfo.deleteAddressinfo(id);
            //刷新界面
            $scope.showAddressinfo();
            $scope.hidemodal();
        }
    }]);

})(angular);
