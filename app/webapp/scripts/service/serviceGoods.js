(function(angular){
	var app = angular.module('module.service.goods',[]);
	app.service('serviceGoods',['$http',function($http){
		var menu = [];
		this.get = function(id){
			$http.get('/goods/menu',{id})
			.success(function(data,status,header,config){
				angular.forEach(data,function (item) {
					menu.push();
				});
			});
		};
	}]);
})(angular);
