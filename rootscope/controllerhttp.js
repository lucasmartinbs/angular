angular.module("myapp",[])
.controller("controllerhttp",function($scope,$http){
	$scope.posts = [];
	$scope.loading = true;

	$scope.newPost = {};
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
			$scope.loading= false;
		})
		.error(function(err){
			$scope.loading= false;
		});
	$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
  			title: $scope.newPost.title,
  			body: $scope.newPost.body,
  			userId: 1
		})
		.success(function(data,status,headers,config){
		  /*$scope.posts.push($scope.newPost);*/
		  console.log()
		  $scope.posts.push(data);
		  $scope.addPost = {};

		})
		.error(function(error,status,headers,config){
			console.log(error)
		});
	}
});