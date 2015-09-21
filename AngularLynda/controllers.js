var myApp = angular.module('myApp', []);

	// controler
	myApp.controller('MyController', function MyController($scope, $http){
	// Model - Object
	$http.get('js/data.json').success(function(data){
		
	 $scope.authors = data;
	});
});