(function(angular){
    //创建模块
    var app = angular.module('module.control.order',["ngRoute","module.service.order"]);//placeHolder--order

    //路由处理
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/order",{
            controller:"order",
            templateUrl:"../../views/viewOrder.html"
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
            $scope.orderlist=orderlist;
        });
        //获取每个订单的总价
        $scope.sumPrice=function(orderid){
            let sumprice = 0;
            for (let i=0;i<$scope.orderlist.length;i++){
                if (orderid==$scope.orderlist[i].id){
                    let order = $scope.orderlist[i];
                    for (let j=0;j<order.goodslist.length;j++){
                        sumprice+=order.goodslist[j].quantity*order.goodslist[j].price;
                    }
                    return sumprice;
                }
            }
        }
        //确认订单送达
        $scope.confirmOrder=function(id){
            if(confirm("确认收货？")){
                orderinfo.changeOrderStatus(id,2,function (data) {
                    if (data.desc==0){
                        alert("操作失败，请重新操作！");
                    }
                    window.location.reload();
                })
            }
        }
    }]);
})(angular);
