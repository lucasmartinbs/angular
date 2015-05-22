var app = angular.module("myapp",[]);

app.controller("mycontroller",function($scope){
	$scope.nombre= "empty1";
	$scope.comentarios = [
	{
		comentario: "primercomentario",
		username: "user A"
	},
	{
		comentario: "segundo comentario",
		username: "user B"
	}
	];
	
	$scope.agregarcomentario = function(){
		$scope.comentarios.push($scope.nuevocomentario);
		$scope.nuevocomentario= {};
	}

});

app.controller("controller2",function($scope){
	$scope.nombre= "empty2";
	$scope.comentarios = [
	{
		comentario: "buen dia tutorial",
		username: "user A"
	}
	];
});