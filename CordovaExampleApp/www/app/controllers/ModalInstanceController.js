(function () {
    'use strict';
    angular.module("ToDoApp.controllers")
        .controller('ModalInstanceController', ['$scope', '$modalInstance', 'toDoItem',  function ($scope, $modalInstance, toDoItem) {
            $scope.toDoItem = toDoItem;

            console.log("Passed toDoItem with id: " + toDoItem);

            $scope.ok = function () {
                console.log("Closed toDoItem with id: " + toDoItem);
                $modalInstance.close(toDoItem);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
})();