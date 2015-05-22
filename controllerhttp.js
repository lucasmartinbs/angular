angular.module("myapp",[])
.controller("controllerhttp",function($scope,$http){
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.succes(function(data){
			console.log(data);
		})
		.error(function(err){

		});
});