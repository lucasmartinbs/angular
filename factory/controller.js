angular.module("todolist",["LocalStorageModule"])
.factory("todoservice",function(localStorageService){
	var todoservice = {};
	todoservice.key = "angular-todolist";

	if(localStorageService.get(todoservice.key)){
		todoservice.activities = localStorageService.get(todoservice.key);
	}
	else{
		todoservice.activities = [];
	}
	todoservice.add= function(newActv){
		todoservice.activities.push(newActv);
		todoservice.updateLocalStorage();
	};
	todoservice.updateLocalStorage= function(){
		localStorageService.set(todoservice.key,todoservice.activities)
	};
	todoservice.clean = function(){
		todoservice.activities= [];
		todoservice.updateLocalStorage();
		return todoservice.getAll();
	};
	todoservice.getAll = function(){
		return todoservice.activities;
	}
	todoservice.removeitem = function(item){
		todoservice.activities = todoservice.activities.filter(function(activity){
			return activity !== item;
		});
		todoservice.updateLocalStorage();
		return todoservice.getAll();
	}

	return todoservice;
})

.controller("todocontroller",function($scope,todoservice){
	$scope.todo = todoservice.getAll();
	$scope.newActv = {};
	$scope.addActv = function(){
		todoservice.add($scope.newActv);
		$scope.newActv = {};
	}
	$scope.removeActv = function(item){
		$scope.todo = todoservice.removeitem(item);
	}
	$scope.clean = function(){
		$scope.todo = todoservice.clean();
	}
	
});