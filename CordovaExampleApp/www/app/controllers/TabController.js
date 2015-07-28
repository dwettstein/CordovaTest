(function () {
	'use strict';
	angular.module("ToDoApp.controllers")
        .controller('TabController', function () {
            this.selectedTab = 1;
                
            this.selectTab = function (setTab) {
                this.selectedTab = setTab;
            };

            this.isSelected = function (checkTab) {
                return this.selectedTab === checkTab;
            };
        });
})();