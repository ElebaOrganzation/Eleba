(function(angular){
	var app = angular.module('menu',[
		'ngRoute',
		'module.service.goods'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/menu/:shopId/:selector',{
			controller : 'controlMenu',
			templateUrl : '../../views/viewMenu.html'
		});
	}]);
	app.controller('controlMenu',[
		'$scope',
		'$routeParams',
		'serviceGoods',
		function($scope,$routeParams,serviceGoods){
			$scope.menu = serviceGoods.get($routeParams.shopId);
			$scope.selector = $routeParams.selector;
			console.log($routeParams.shopId);
		}]);
})(angular);
