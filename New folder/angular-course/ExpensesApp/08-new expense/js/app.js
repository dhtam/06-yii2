var app = angular.module('expensesApp', ['ngRoute'])

//define routes for the app, each route defines a template and a controller
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'views/expenses.html',
      controller  : 'ExpensesViewController'
    })
    .when('/expenses', {
      templateUrl : 'views/expenses.html',
      controller  : 'ExpensesViewController'
    })
    .when('/expenses/new', {
      templateUrl : 'views/expenseForm.html',
      controller  : 'ExpenseViewController'
    })
    .when('/expenses/edit/:id', {
      templateUrl : 'views/expenseForm.html',
      controller  : 'ExpenseViewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

//this service will take care of keeping track of the expenses and other operations
//for more on services see the documentation: https://docs.angularjs.org/guide/providers
app.factory('Expenses', function() {
  var service = {};

  //the id will be a unique identifier, it could come from a server
  service.entries = [
    {id: 1, description: 'food', amount: 10, date: '2014-10-01'},
    {id: 2, description: 'tickets', amount: 11, date: '2014-10-02'},
    {id: 3, description: 'food', amount: 12, date: '2014-10-03'},
    {id: 4, description: 'phone credit', amount: 13, date: '2014-10-04'},
    {id: 5, description: 'bills', amount: 14, date: '2014-10-05'},
    {id: 6, description: 'food', amount: 15, date: '2014-10-06'},
  ];

  service.save = function(entry) {
    service.entries.push(entry);
  }

  return service;
});

//listing of all expenses
app.controller('ExpensesViewController', ['$scope', 'Expenses', function($scope, Expenses) {
  $scope.expenses = Expenses.entries;
}]);

//create or edit an expense
app.controller('ExpenseViewController', ['$scope', '$routeParams', '$location', 'Expenses', function($scope, $routeParams, $location, Expenses) {
  if(!$routeParams.id) {
    $scope.expense = {id: 7, description: 'something', amount: 10, date: new Date()};
  }

  $scope.save = function() {
    Expenses.save($scope.expense);
    $location.path('/');
  }
}]);