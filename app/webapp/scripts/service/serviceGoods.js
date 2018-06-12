(function(angular){
	var app = angular.module('module.service.goods',[]);
	app.service('serviceGoods',['$http',function($http){
		var menu = [];
		var category = [];
		this.getCategory = function(id){
			$http({
                method : 'post',
                url : '/category',
                params : {
                    shopid : id
                }
            }).then(function successCallback(res) {
               	angular.forEach(res.data,function (item) {
					category.push(item);
				});
            }, function errorCallback(res) {// 请求失败执行代码
            });
            return category;
		};
			
		this.getMenu = function(id){
			$http({
                method : 'post',
                url : '/goods/menu',
                params : {
                    shopid : id
                }
            }).then(function successCallback(res) {
               	angular.forEach(res.data,function (item) {
					menu.push(item);
				});
            }, function errorCallback(res) {// 请求失败执行代码
            });
            return menu;
		};

	}]);
	app.service('serviceOrder',['$http',function ($http) {
        this.insertOrder=function(userid,shopid,date,callback){
            $http({
                method : 'post',
                url : '/orderinfo/insert',
                params : {
                    userid :userid,
                    shopid:shopid,
                    date:date
                }
            }).then(function successCallback(res) {
                callback(res.data);
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }
        this.insertOrderGoods=function(orderid,goodsinfo,callback){
            $http({
                method : 'post',
                url : '/goods/ordergoods',
                params : {
                    orderid :orderid,
                    goodsid:goodsinfo.goodsid,
                    quantity:goodsinfo.quantity
                }
            }).then(function successCallback(res) {
                callback(res.data);
            }, function errorCallback(res) {// 请求失败执行代码
            });
        }
    }]);

})(angular);
