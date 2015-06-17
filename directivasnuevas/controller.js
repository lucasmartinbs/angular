angular.module("myapp",[])
.directive('backImg',function(){
	return function(scope,element,attrs){

		attrs.$observe('backImg',function(value){
			element.css({
				"backgound": "url("+value+")",
				"backgound-size":"cover",
				"backgound-position": "center"
			});
		});
	}
})
.controller("appcontroller",function($scope,$http){
	$http.get("https://api.github.com/users/lucasmartinbs/repos")
	.success(function(data){
		$scope.repos = data;
	})
	.error(function(err){
		console.log(err);
	});
});