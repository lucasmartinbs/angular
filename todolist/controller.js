angular.module("todolist",["LocalStorageModule"])
.controller("todocontroller",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}
	else{
		$scope.todo = [];
	}
	
	/*
		{
			actividad: "terminar el curso angular"
			fecha: "29-05-15  2:00pm"

		}
	
	$scope.$watch(function(){
		return $scope.newActv;},
		function(newValue,oldValue){
			console.log(newValue)
			console.log(oldValue)
		});
	*/
	$scope.$watchCollection('todo',function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.todo);
	});
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		/*localStorageService.set("angular-todolist",$scope.todo);*/
	}
	$scope.clean = function(){
		$scope.todo = [];
		/*localStorageService.set("angular-todolist",$scope.todo); */
	}
});