(function(angular){
    //这是个service模板
    var app = angular.module('module.service.order',[]);//placeHolder--占位符，填数据的名称

    app.service('orderinfo',['$http',function($http){//获取地址数据
        this.getOrderinfo=function(callback){
            // 向服务器请求订单信息
            $http({
                method:"post",
                url:"/orderinfo/get",
                params:{
                    userid:window.localStorage.getItem("userid"),
                }
            }).then(function successCallback(res) {
                var orderlist = res.data;
                callback(orderlist);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
        //改变订单状态
        this.changeOrderStatus=function(id,status,callback){
            // 向服务器请求修改订单信息
            $http({
                method:"post",
                url:"/orderinfo/update",
                params:{
                    id:id,
                    status:status
                }
            }).then(function successCallback(res) {
                callback(res.data);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
    }]);
})(angular);
