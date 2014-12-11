(function () {
    'use strict';
    angular.module("ToDoApp.controllers")
        .controller('ModalInstanceController', function ($scope, $modalInstance, toDoItem) {
            $scope.ok = function () {
                $modalInstance.close(toDoItem);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        });
})();