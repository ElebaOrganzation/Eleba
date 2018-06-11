/**
 * Created by Administrator on 2018/6/1 0001.
 */
(function(angular){
	var app = angular.module('index',[
		'ngRoute',
		'module.control.index',
		'module.control.profile',
		'module.control.order'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo:'/index/all'});
	}]);
	app.controller("navCtrl",["$scope",'$location',function ($scope,$location) {
        $scope.$location=$location;
        $scope.text="aaa";
        $scope.$watch("$location.path()",function (now,old) {
            $scope.path = now;
        })
    }])
})(angular);


