angular.module("myapp",[])
.run(function($rootScope){
	$rootScope.nombre = "nombre root"
})
.controller("mycontroller",function($scope){
	$scope.nombre= "nombre mycontroller";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre ="updated";
		});
	},10000);
})
.controller("childcontroller",function($scope){
	$scope.nombre= "nombre child";
});