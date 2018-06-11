(function(angular){
	//这是个service模板
	var app = angular.module('module.service.profile',[]);//placeHolder--占位符，填数据的名称
	app.service('userinfo',['$http',function($http){//获取用户数据
	    this.getUserinfo=function(callback){
            // 向服务器请求用户信息
            $http({
                method:"post",
                url:"/userinfo/get",
                params:{
                    name:window.localStorage.getItem("username")
                }
            }).then(function successCallback(res) {
                // 获取用户信息
                userinfo=res.data;
                callback(userinfo);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
	}]);
    app.service('addressinfo',['$http',function($http){//获取地址数据
        this.getAddressinfo=function(callback){
            // 向服务器请求用户地址信息
            $http({
                method:"post",
                url:"/userinfo/address",
                params:{
                    userid:window.localStorage.getItem("userid"),
                }
            }).then(function successCallback(res) {
                var addresslist = res.data;
                callback(addresslist);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
        this.updateAddressinfo = function (id,address,callback) {
            // 向服务器请求用户地址信息
            $http({
                method:"post",
                url:"/userinfo/changeAddress",
                params:{
                    userid:id,
                    newattr:address
                }
            }).then(function successCallback(res) {
                callback(res);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }
        //插入数据
        this.insertAddressinfo= function(data){
            // 向服务器请求插入用户地址信息
            $http({
                method:"post",
                url:"/userinfo/insertAddress",
                params:{
                    userid:data.userid,
                    newattr:data.address
                }
            }).then(function successCallback(res) {

            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        };
        //删除地址数据
        this.deleteAddressinfo=function (addressid) {
            // 向服务器请求插入用户地址信息
            $http({
                method:"post",
                url:"/userinfo/deleteAddress",
                params:{
                    id:addressid
                }
            }).then(function successCallback(res) {
                //请求成功执行代码
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }
    }]);
})(angular);
