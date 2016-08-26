'use strict';


angular.module('core.services', ['ngResource'])                  //依赖ngResource

.factory('LoginService',function($resource){
	return $resource('books/userLogin.json',{},{        //返回resource对象,第一个属性是url,第二个属性是给url赋值,第三个属性是函数(客户端传给服务端的方法,url后跟的参数值,返回是否为Array)
		 login: {
          method: 'GET',
          params: {},                //GET时传的参数，此处id为books，则请求为books/books.json
          isArray: false
        }
	})
});

