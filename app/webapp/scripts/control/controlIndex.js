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
        //TODO 获取店铺信息
        shopinfo.getShopinfo(function (shopinfo) {
            $scope.shopinfo=shopinfo;
        })

        $scope.typeid=$routeParams.typeid;
        //$scope.typename="121212";
        //$scope.setTypename=function(typename){
        //    $scope.typename=typename;
        //}
        if($scope.keyword==""||$scope.keyword==undefined){
            if($routeParams.typeid=="all"){
                $scope.json="";
            }
            else{
                $scope.json={typeid:$routeParams.typeid}
            }
        }
        else{
            if($routeParams.typeid=="all"){
                $scope.json={name:$scope.name};
            }
            else{
                $scope.json={typeid:$routeParams.typeid,name:$scope.name}
            }
        }


	}]);
})(angular);
