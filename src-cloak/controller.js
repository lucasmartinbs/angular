angular.module("myapp",[])
.controller("appcontroller",function($scope,$http){
	$http.get("https://api.github.com/users/lucasmartinbs/repos")
	.success(function(data){
		$scope.repos = data;
	})
	.error(function(err){
		console.log(err);
	});
});