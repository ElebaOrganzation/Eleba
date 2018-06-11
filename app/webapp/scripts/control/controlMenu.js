(function(angular){
	var app = angular.module('menu',[
		'ngRoute',
		'module.service.goods',
        'module.service.index'

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
        'shopinfo',
		function($scope,$routeParams,serviceGoods,shopinfo){
            //获取当前店铺信息
            shopinfo.getShopinfoByid($routeParams.shopId,function(shopinfobyid){
                $scope.shopdata=shopinfobyid[0];
                console.log($scope.shopdata);
            });
			$scope.goodsinfo = serviceGoods.getMenu($routeParams.shopId);
			$scope.category = serviceGoods.getCategory($routeParams.shopId);
			$scope.select = function(value){
				$scope.selector = value;
			};
			console.log($scope.goodsinfo);
		}]);
})(angular);
