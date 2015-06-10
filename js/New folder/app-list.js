var app = angular.module('expensesApp',[]);

app.controller('ExpensesViewController', ['$scope', function($scope){
	// $scope.name = "Pablo";
	 $scope.items= [
	 {
	 	name:"pizza",
	 	ingredients: ['chess','tomato','oregano', 'salt']	
	 },
	 {
	 	name:'tortilla',
	 	ingredients: ['butter','salt','pepper', 'garlic']
	 },
	 {
	 	name:'cake',
	 	ingredients: ['cream','sugar']
	 },
	 {
	 	name:'empanada',
	 	ingredients:['flour','meat','onion']
	 }
	 ];
}]);