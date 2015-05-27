angular.module("myapp",[])
.controller("controllerhttp",function($scope,$http){
	$scope.posts = [];
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){
		});
	$scope.addPost = function(){
		$http.post('http://jsonplaceholder.typicode.com/posts',{
  			title: $scope.newPost.title,
  			body: $scope.newPost.title,
  			userId: 1
		})
		.success(function(data,status,headers,config){
		  console.log(data);
		  $scope.posts.push($scope.newPost);
		  $scope.addPost = {};

		})
		.error(function(error,status,headers,config){
			console.log(error)
		});
	}
});