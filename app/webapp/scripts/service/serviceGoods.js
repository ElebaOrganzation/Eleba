(function(angular){
	var app = angular.module('module.service.goods',[]);
	app.service('serviceGoods',['$http',function($http){
		var menu = [];
		this.get = function(id){
			console.log('se'+id);
			$http({
                method : 'post',
                url : '/goods/menu',
                params : {
                    shopid : id
                }
            }).then(function successCallback(res) {
            	console.log(res.data);
               	angular.forEach(res.data,function (item) {
					menu.push(item);
				});
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
            return menu;
		};
	}]);
})(angular);
