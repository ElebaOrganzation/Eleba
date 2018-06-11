/**
 * Created by Administrator on 2018/6/9 0009.
 */
(function(anguar){
    var app = angular.module('module.service.index',[]);
    app.service('shopinfo',['$http',function($http){
        //获取所有的店铺信息
        this.getShopinfo=function(callback){
            // 向服务器请求用户信息
            $http({
                method:"post",
                url:"/shopinfo/all"
            }).then(function successCallback(res) {
                // 获取店铺信息
                shopinfo=res.data;
                callback(shopinfo);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
        //获取指定店铺Id的店铺信息
        this.getShopinfoByid=function(shopid,callback){
            $http({
                method:"post",
                url:"/shopinfo/shopid",
                params:{shopid:shopid}
            }).then(function successCallback(res){
                //console.log(res.data);
                shopinfobyid=res.data;
                callback(shopinfobyid);
            },function errorCallback(res){
                //请求失败
            })
        }

    }]);
})(angular);