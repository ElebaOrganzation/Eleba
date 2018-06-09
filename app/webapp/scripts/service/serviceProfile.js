(function(angular){
	//这是个service模板
	var app = angular.module('module.service.profile',[]);//placeHolder--占位符，填数据的名称
	app.service('userinfo',['$http',function($http){//获取用户数据
	    this.getUserinfo=function(callback){
            // 向服务器请求用户信息
            $http({
                method:"post",
                url:"/userinfo",
                params:{
                    name:window.localStorage.getItem("username"),
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
                url:"/addressinfo",
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
    }]);
})(angular);
