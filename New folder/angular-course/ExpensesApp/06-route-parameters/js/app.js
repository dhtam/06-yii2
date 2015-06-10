var app = angular.module('expensesApp', ['ngRoute']);

//define routes for the app, each route defines a template and a controller
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
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

app.controller('ExpensesViewController', ['$scope', function($scope) {
  $scope.expenses = [
    {description: 'food', amount: 10, date: '2014-10-01'},
    {description: 'tickets', amount: 11, date: '2014-10-02'},
    {description: 'food', amount: 12, date: '2014-10-03'},
    {description: 'phone credit', amount: 13, date: '2014-10-04'},
    {description: 'bills', amount: 14, date: '2014-10-05'},
    {description: 'food', amount: 15, date: '2014-10-06'},
  ];
}]);

app.controller('ExpenseViewController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.someText = 'The world is round. ID=' + $routeParams.id;
}]);