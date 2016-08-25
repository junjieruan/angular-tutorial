'use strict';


angular.module('core.book', ['ngResource'])                  //依赖ngResource

.factory('Book',function($resource){
	return $resource('books/:id.json',{},{
		 query: {
          method: 'GET',
          params: {id: 'books'},                //GET时传的参数，此处id为books，则请求为books/books.json
          isArray: true
        }
	})
});

