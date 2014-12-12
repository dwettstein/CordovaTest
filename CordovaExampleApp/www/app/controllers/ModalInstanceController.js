(function () {
    'use strict';
    angular.module("ToDoApp.controllers")
        .controller('ModalInstanceController', ['$scope', '$modalInstance', 'toDoItem',  function ($scope, $modalInstance, toDoItem) {
            $scope.toDoItem = toDoItem;

            console.log("Passed toDoItem with id: " + toDoItem.id);

            $scope.close = function () {
                console.log("Closed toDoItem with id: " + toDoItem.id);
                $modalInstance.close(toDoItem);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
})();