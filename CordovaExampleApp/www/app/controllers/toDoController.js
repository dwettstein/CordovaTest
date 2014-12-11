(function () {
	'use strict';
	angular.module("ToDoApp.controllers")
        .controller('ToDoController', ['$scope', 'storage', function ($scope, storage) {
        	var refresh = function () {
        		$scope.todos = storage.getAll();
        	}

        	$scope.addToDo = function () {
        		var title = $scope.newToDoTitle;
        		if (!title) {
        			return;
        		};
                var description = $scope.newToDoDescription;
                if (!description) {
                    description = '';
                };

        		$scope.newToDoTitle = '';
                $scope.newToDoDescription = '';
        		storage.create(title, description)
                    .then(function (todo) {
                    	$scope.todos.push(todo);
                    	return todo;
                    });
        	}

        	$scope.changeToDoTitle = function (toDoItem) {
        		storage.update(toDoItem)
        	}

            $scope.changeToDoDescription = function (toDoItem) {
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