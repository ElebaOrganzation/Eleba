(function(angular){
	var app = angular.module('menu',[
		'ngRoute',
		'module.service.goods'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/menu/:shopId',{
			controller : 'controlMenu',
			templateUrl : '../../views/viewMenu.html'
		});
	}]);
	app.controller('controlMenu',[
		'$scope',
		'$routeParams',
		'serviceGoods',
		function($scope,$routeParams,serviceGoods){
			$scope.goodsinfo = serviceGoods.getMenu($routeParams.shopId);
			$scope.category = serviceGoods.getCategory($routeParams.shopId);
			$scope.select = function(value){
				$scope.selector = value;
			};
			console.log($scope.goodsinfo);
		}]);
})(angular);
