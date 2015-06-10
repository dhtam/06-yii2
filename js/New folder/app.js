var app = angular.module('expensesApp',[]);

app.controller('ExpensesViewController', ['$scope', function($scope){
	// $scope.name = "Pablo";
	$scope.expenses = {
		description: 'Food',
		amount: 1099

	};

	$scope.phrase = 'The sky is blue';

	$scope.increaseAmount = function(){
		$scope.expenses.amount ++;
	};
	
}]);