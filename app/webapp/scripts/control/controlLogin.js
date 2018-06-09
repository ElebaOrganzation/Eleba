(function(angular){
	//这是个control模板
	var app = angular.module('module.control.login',[]);//placeHolder--login.html
	app.controller('login',['$scope',"$http",function($scope,$http){//placeHolder--login.html
		$scope.name="";
		$scope.pwd="";
		$scope.loginCheck=function () {
			//校验输入框是否为空
			if ($scope.name==""||$scope.pwd=="") {
				alert("账号密码不能为空!");
				return;
			}

            // 向服务器请求用户信息
            $http({
                method:"post",
                url:"/login",
                params:{
                	name:$scope.name,
					pwd:$scope.pwd
				}
            }).then(function successCallback(res) {
            	console.log(res);
                // 处理登录结果
				if (res.data.desc=="0") {
					alert("用户不存在，请重新输入。");
				}else if(res.data.desc=="2"){
					alert("用户名或密码错误，请重新输入。");
				}else if(res.data.desc=="1"){
					console.log("登录成功");
					window.localStorage.setItem("username",$scope.name);
					window.localStorage.setItem("userid",res.data.userid);
                    setTimeout(function () {
                        window.location.href="../../profile.html";
                    },1000);
				}
            }, function errorCallback(res) {
                // 请求失败执行代码
				console.log("请求失败！")
            });

        };
	}]);
})(angular);
