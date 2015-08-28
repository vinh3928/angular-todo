
app.controller("TodoController", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
  var todoList = new Firebase("https://dazzling-inferno-3947.firebaseio.com/list")
  $scope.todos = $firebaseArray(todoList);
  $scope.newTodo = {message: "", completed: false};
  $scope.addTodo = function () {
    $scope.todos.$add($scope.newTodo).then(function (data) {
      $scope.newTodo.message = "";
    });
  };
  $scope.removeTodo = function (todo) {
    $scope.todos.$remove(todo);
  };
  $scope.updateTodo = function (index) {
    $scope.todos[index].completed = !$scope.todos[index].completed;
    $scope.todos.$save(index);

  };
}]);
