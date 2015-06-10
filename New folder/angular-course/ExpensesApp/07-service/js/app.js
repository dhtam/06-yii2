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

app.factory('Expenses', function(){
  var service = {};

  service.entries = [
    {description: 'food', amount: 10, date: '2014-10-01'},
    {description: 'tickets', amount: 11, date: '2014-10-02'},
    {description: 'food', amount: 12, date: '2014-10-03'},
    {description: 'phone credit', amount: 13, date: '2014-10-04'},
    {description: 'bills', amount: 14, date: '2014-10-05'},
    {description: 'food', amount: 15, date: '2014-10-06'},
  ];

  return service;
});

//listing of all expenses
app.controller('ExpensesViewController', ['$scope', 'Expenses', function($scope, Expenses) {
  $scope.expenses = Expenses.entries;
}]);

//create or edit an expense
app.controller('ExpenseViewController', ['$scope', '$routeParams', 'Expenses', function($scope, $routeParams, Expenses) {
  $scope.someText = 'The world is round. You entered id: '+ $routeParams.id + ' The first entry is: ' + Expenses.entries[0].description;
}]);


