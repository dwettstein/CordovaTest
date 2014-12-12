(function() {
	"use strict";

	var app = angular.module('ToDoApp', ['ui.bootstrap', 'ToDoApp.services', 'ToDoApp.controllers', 'ToDoApp.directives']);
	angular.module('ToDoApp.directives', []);
    angular.module('ToDoApp.controllers', []);
    angular.module('ToDoApp.services', []);
})();