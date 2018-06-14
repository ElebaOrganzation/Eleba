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
		}).otherwise({redirectTo:'/index/all'});
	}]);
	app.controller('controlMenu',[
		'$scope',
		'$routeParams',
		'serviceGoods',
        'shopinfo',
		'serviceOrder',
    function($scope,$routeParams,serviceGoods,shopinfo,serviceOrder){
        //获取当前店铺信息
        shopinfo.getShopinfoByid($routeParams.shopId,function(shopinfobyid){
            $scope.shopdata=shopinfobyid[0];
        });
        //获取店铺商品信息
        $scope.goodsinfo = serviceGoods.getMenu($routeParams.shopId);
        $scope.category = serviceGoods.getCategory($routeParams.shopId);
        $scope.select = function(value){
            $scope.selector = {cateid:value};
        };

        //			购物车
        $scope.modal=false;
        $scope.cartlist =[];
        $scope.addGoods=function(id){
            let flag = $scope.addQuantity(id);
            //判断当购物车不存在该商品时，添加商品到购物车列表
            if (!flag) {
                for (var j = 0; j < $scope.goodsinfo.length; j++) {
                    if (id == $scope.goodsinfo[j].id) {
                        let goodsdata = {
                            goodsid: id,
                            shopid: $scope.goodsinfo[j].shopid,
                            name: $scope.goodsinfo[j].name,
                            price: $scope.goodsinfo[j].price,
                            quantity: 0
                        }
                        //添加到列表
                        $scope.cartlist[$scope.cartlist.length] = goodsdata;
                    }
                }
            }
        };
        $scope.addQuantity=function(id){
            for(var i=0;i<$scope.cartlist.length;i++){
                if($scope.cartlist[i].goodsid==id ){
                    $scope.cartlist[i].quantity=parseInt($scope.cartlist[i].quantity)+1;
                    return true;
                }
            }
            return false;
        };
        $scope.subQuantity=function(id){
            for(var i=0;i<$scope.cartlist.length;i++){
                if($scope.cartlist[i].goodsid==id ){
                    if ($scope.cartlist[i].quantity<=1){
                        if(confirm("确认移除购物车？")){
                            $scope.cartlist.splice(i,1);
                        };
                    }else{
                        $scope.cartlist[i].quantity=parseInt($scope.cartlist[i].quantity)-1;
                    }
                    break;
                }
            }
        };
        //商品数量
        $scope.sumQuantity=function () {
            var count = 0;
            for (var i = 0;i<$scope.cartlist.length;i++){
                count+= parseInt($scope.cartlist[i].quantity);
            }
            return count;
        };
        //总价格
        $scope.sumPrice=function () {
            var count = 0;
            for (var i = 0;i<$scope.cartlist.length;i++){
                count+=parseInt($scope.cartlist[i].quantity*$scope.cartlist[i].price);
            }
            return count;
        };
        $scope.removeAll=function(){
            if(confirm("确认清空购物车？")) {
                $scope.cartlist = [];
            }
        };
        //提交订单
        $scope.submitOrder=function () {
            var date = new Date();
            var datestr = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            console.log(window.localStorage.getItem('userid')+$routeParams.shopId+datestr)
            serviceOrder.insertOrder(window.localStorage.getItem('userid'),$routeParams.shopId,datestr,function (data) {
                if (data.desc=='1'){
                    let orderId=data.orderid;
                    console.log("orderid:"+data.orderid)
                    for (let i =0;i<$scope.cartlist.length;i++){
                        serviceOrder.insertOrderGoods(orderId,$scope.cartlist[i],function (data) {
                            console.log(data.desc);
                        });
                    }
                } else{
                    alert('提交订单失败!');
                }
                $scope.cartlist = [];
                $scope,modal=false;
                window.location.href="index.html#/order";

            });
        }

    }]);
})(angular);
