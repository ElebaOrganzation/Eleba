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
        var str=["美食","晚餐","果蔬生鲜","医药健康","大牌五折","浪漫鲜花","麻辣烫","地方菜系","披萨意面","地方小吃"];
        for(var i=0;i<str.length;i++){
            if((i+1)==$scope.typeid){
                $scope.typename=str[i];
            }
        }
        if($routeParams.typeid=="all"){
            $scope.json={name:""};
        }
        else{
            $scope.json={typeid:$routeParams.typeid};
        }
        //首页js效果
        window.onscroll = function(){
            //获取距离页面顶部的距离
            if($routeParams.typeid=="all"){
                var t = document.documentElement.scrollTop||document.body.scrollTop;
                if(t<90){
                    document.getElementById('search-wrapper').style.display='block';
                    document.getElementById('search-wrapper-top').style.display='none';
                    document.getElementById('ToTop_image').style.display='none';
                }else if(t>=90&&t<=200){
                    document.getElementById('search-wrapper').style.display='none';
                    document.getElementById('search-wrapper-top').style.display='block';
                    document.getElementById('ToTop_image').style.display='none';
                }
                else if(t>200){
                    document.getElementById('search-wrapper').style.display='none';
                    document.getElementById('search-wrapper-top').style.display='block';
                    document.getElementById('ToTop_image').style.display='block';
                    document.getElementById('ToTop_image').onclick=function(){
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                    }
                }
            }
        }
	}]);

})(angular);
