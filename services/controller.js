angular.module("todolist",["LocalStorageModule"])
.service("todoservice",function(localStorageService){
	var todoservice = {};

	this.key = "angular-todolist";

	if(localStorageService.get(this.key)){
		this.activities = localStorageService.get(this.key);
	}
	else{
		this.activities = [];
	}
	this.add= function(newActv){
		this.activities.push(newActv);
		this.updateLocalStorage();
	};
	this.updateLocalStorage= function(){
		localStorageService.set(this.key,this.activities)
	};
	this.clean = function(){
		this.activities= [];
		this.updateLocalStorage();
		return this.getAll();
	};
	this.getAll = function(){
		return this.activities;
	}
	this.removeitem = function(item){
		this.activities = this.activities.filter(function(activity){
			return activity !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	}
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