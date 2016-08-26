'use strict';

angular.module('myApp.loginView', ['ngRoute','core.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'loginView/loginView.html',
    controller: 'loginViewCtrl'
  });
}])

.controller('loginViewCtrl', function mainViewCtrl($scope,LoginService) {
    $scope.login="Login";
    $scope.Name="Name";
    $scope.Password="Password";
    $scope.SignIn="Sign In";
    
    $scope.loginResult="登录失败";                          //模态框中数据
    $scope.loginText="请重新输入用户名和密码";

    $scope.setName=function(){
        $scope.login="Register";
        $scope.Name="姓名";
        $scope.Password="身份证";
        $scope.SignIn="Register";
    }

    $scope.signIn=function(){

        LoginService.login({},
            {},
            function(data){        //获取数据是异步操作,方式执行时直接console.log不行,data拿到返回的数据才执行判断
                console.log('data from userLogin.json:',data.name+data.password);
                if(data.name===$scope.myName && data.password===$scope.myPassword){
                    $scope.loginResult="登录成功";
                    $scope.loginText="进入书籍查阅主页面";
                    $scope.toMainView=function(){
                        location.href ="/index.html#!/main";       //登录成功 路由切换进主页
                    }
                }
                else{
                    // alert("验证错误!请重新输入");
                }
            },
            function(error){
                 console.log('failed to get the data from server');
            })
        
        // if($scope.myName==='rjj' && $scope.myPassword==='12345'){
        //    // console.log("success");
        //    alert("login success");
        //    location.href ="/index.html#!/main";                          //登录成功 路由切换进主页
        // }
        // else{
        //     alert("验证错误!请重新输入");
        // }
    }
});