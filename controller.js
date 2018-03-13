var app = angular.module("basicApp", []);
var module = angular.module('listApp', []);
app.controller('homeController', function($scope) {
	$scope.uname = "demouser";
});

function initController ($scope) {
	$scope.items=['first item'];
	$scope.addItem = function(){
		if($scope.newItem){
			$scope.items.push($scope.newItem);
			$scope.newItem=undefined;
		}
	}
}