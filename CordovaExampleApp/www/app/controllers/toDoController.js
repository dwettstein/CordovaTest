(function () {
	'use strict';
	angular.module("ToDoApp.controllers")
        .controller('ToDoController', ['$scope', 'storage', function ($scope, storage) {
        	var refresh = function () {
        		$scope.todos = storage.getAll();
        	}

        	$scope.addToDo = function () {
        		var text = $scope.newToDoText;
        		if (!text) {
        			return;
        		};

        		$scope.newToDoText = '';
        		storage.create(text)
                    .then(function (todo) {
                    	$scope.todos.push(todo);
                    	return todo;
                    });
        	}

        	$scope.changeToDoText = function (toDoItem) {
        		storage.update(toDoItem)
        	}

        	$scope.toggleToDoDone = function (toDoItem) {
        		toDoItem.done = !toDoItem.done;
        		storage.update(toDoItem);
        	}

        	$scope.removeToDo = function (toDoItem) {
        		storage.del(toDoItem).then(function (todo) {
        			var index = $scope.todos.indexOf(todo);
        			$scope.todos.splice(index, 1);
        		});
        	}
        	refresh();
        }]);
})();