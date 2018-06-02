(function(angular){
	var app = angular.module('module.control.index',[
		'ngRoute'	
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/index',{
			controller:'controlIndex',
			templateUrl:'./views/viewIndex.html'
		});
	}]);
	app.controller('controlIndex',['$scope',function($scope){
		//TODO
	}]);
})(angular);
