/**
 * Created by Administrator on 2018/6/9 0009.
 */
(function(anguar){
    var app = angular.module('module.service.index',[]);
    app.service('shopinfo',['$http',function($http){//获取店铺信息
        this.getShopinfo=function(callback){
            // 向服务器请求用户信息
            $http({
                method:"post",
                url:"/shopinfo"
            }).then(function successCallback(res) {
                // 获取店铺信息
                shopinfo=res.data;
                callback(shopinfo);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
    }]);
})(angular);