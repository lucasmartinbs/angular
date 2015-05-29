angular.module("filtermodule",[])
.filter("removeHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]>+>/gm,'');
	}
})
.filter("repla",function(){
	return function(texto){
		return String(texto).replace("mundo",'World');
	}
})
.filter("mayus",function(){
	return function(texto){
		return texto.toUpperCase();
	}
})
.controller("filtercontroller",function($scope){
	$scope.mi_html = "<p> hola mundo </p>"
	$scope.objeto = {};
	$scope.objeto.title = "uno";
	$scope.objeto.body = "dos tres";
	$scope.moneda = 2500.5;

});