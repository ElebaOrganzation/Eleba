(function(angular){
	var app = angular.module('module.menu',['ngRoute']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/menu/:shopId/:selector',{
			controller : controlMenu,
			templateUrl : './views/viewMenu.html'
		});
	}]);
	app.controller('controlMenu',[
		'$scope',
		'$routeParams',
		'serviceGoods',
		function($scope,$routeParams,serviceGoods){
			$scope.menu = serviceGoods.get($routeParams.shopId);
			$scope.selector = $routeParams.selector;
		}]);
})(angular);
