(function () {
    'use strict';
    angular.module("ToDoApp.controllers")
        .controller('ModalController', ['$scope', '$modal', function ($scope, $modal) {

            $scope.open = function(toDoItem, size) {
                $scope.toDoItem = toDoItem;

                console.log("Clicked on toDoItem with id: " + toDoItem.id);

                var modalInstance = $modal.open({
                  templateUrl: './app/partials/toDoDetailWindow.html',
                  controller: 'ModalInstanceController',
                  size: size,
                  resolve: {
                    toDoItem: function () {
                      $scope.toDoItem = toDoItem;
                      return $scope.toDoItem;
                    }
                  }
                });

                modalInstance.result.then(function (toDoItem) {
                  $scope.toDoItem = toDoItem;
                }, function () {
                  console.log('Modal dismissed at: ' + new Date());
                });
            };

            /*
            this.open = function(toDoItem) {
                console.log(toDoItem.id);
                $scope.toDoItem = toDoItem;
                
                var modalWindow = $("<div>").dialog({
                    overlay: true,
                    shadow: true,
                    flat: true,
                    draggable: true,
                    icon: '',
                    title: 'ToDo Details',
                    content: '',
                    padding: 10,
                    autoOpen: false,
                    modal: true,
                    close: function (e, ui) { $(this).remove(); },
                    buttons: { "Ok": function () { $(this).dialog("close"); } }
                });

                //modalWindow.load(contentUrl).dialog('open');
                modalWindow.load('../partials/toDoDetailWindow.html', function () {
                    $(this).dialog('open');
                });
                
                $.Dialog({
                    overlay: true,
                    shadow: true,
                    flat: true,
                    draggable: true,
                    icon: '',
                    title: 'ToDo Details',
                    content: '',
                    padding: 10,
                    onShow: function(_dialog){
                        var content = '' +
                            '<form class="user-input">' +
                                   '<div class="input-control text">' +
                                          '<input type="text" ng-class="{"text-muted": toDoItem.done}" ng-text-change="changeToDoText(toDoItem)" ng-model="toDoItem.text"/>' +
                                   '</div>' +
                                   '<div ng-class="{"text-muted": toDoItem.done}">{{toDoItem.createDate}}</div>' +
                                   '<div class="form-actions">' +
                                          '<button class="danger" ng-click="removeToDo(toDoItem)">Remove</button>' +
                                          '<button class="button" type="button" onclick="$.Dialog.close()">Cancel</button>' +
                                   '</div>' +
                            '</form>';
                        $.Dialog.content(content);
                        $.Metro.initInputs();
                    }
                });
                
            };
            */
        }]);
})();