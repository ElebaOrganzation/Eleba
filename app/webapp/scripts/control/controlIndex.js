(function(angular){
	var app = angular.module('module.control.index',['ngRoute','module.service.index']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/index/:typeid',{
			controller:'controlIndex',
			templateUrl:'../views/viewIndex.html'
		})
	}]);
	app.controller('controlIndex',['$scope',"$routeParams","shopinfo",function($scope,$routeParams,shopinfo){
        if($routeParams.typeid=="all"){
            $scope.json="";
        }
        else{
            $scope.json={typeid:$routeParams.typeid}
            //$scope.typeid=$routeParams.typeid;
        }
        //TODO 获取店铺信息
        shopinfo.getShopinfo(function (shopinfo) {
                $scope.shopinfo=shopinfo;
        })
	}]);
})(angular);
