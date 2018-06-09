(function(angular){
	var app = angular.module('module.control.index',['ngRoute','module.service.index']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/index',{
			controller:'controlIndex',
			templateUrl:'../views/viewIndex.html'
		});
	}]);
	app.controller('controlIndex',['$scope',"shopinfo",function($scope,shopinfo){
        //TODO 获取店铺信息
        shopinfo.getShopinfo(function (shopinfo) {
            $scope.shopinfo=shopinfo;
        })
	}]);
})(angular);
