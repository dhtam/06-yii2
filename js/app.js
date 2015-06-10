var app = angular.module('expensesApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/expenses.html',
		controller: 'ExpensesViewController'
	})
	.when('/expenses',{
		templateUrl: 'views/expenses.html',
		controller: 'ExpensesViewController'
	})
	.when('/expenses/new',{
		templateUrl: 'views/expensesForm.html',
		controller: 'ExpenseViewController'
	})
	.when('/expenses/edit/:id',{
		templateUrl: 'views/expensesForm.html',
		controller: 'ExpenseViewController'
	});
	/*
	.otherwise({
		redirectTo: '/'
	});
	*/
});


app.factory('Expenses', function(){
	var service = {};
	service.entries = [
    {id: 1, description: 'food', amount: 10, date: '2014-10-01'},
    {id: 2, description: 'tickets', amount: 11, date: '2014-10-02'},
    {id: 3, description: 'food', amount: 12, date: '2014-10-03'},
    {id: 4, description: 'phone credit', amount: 13, date: '2014-10-04'},
    {id: 5, description: 'bills', amount: 14, date: '2014-10-05'},
    {id: 6, description: 'food', amount: 15, date: '2014-10-06'},
  ];
  return service;
});
 
app.controller('HomeViewController',['$scope', function($scope){
	$scope.appTitle= "Simple Expenses Tracker";
}]);
//listing of all expenses
app.controller('ExpensesViewController', ['$scope','Expenses', function($scope,Expenses) {
	 
  	$scope.expenses = Expenses.entries;
}]);

// create expneses
app.controller('ExpenseViewController',['$scope','$routeParams', 'Expenses',function($scope,$routeParams, Expenses){
	$scope.someText= "Create new expenses ID = "+ $routeParams.id + ' The first entry is : '+ Expenses.entries[0].description ;
}]);