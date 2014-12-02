"use strict";

app.controller("TextAnalyserController", function($scope){
		$scope.inputValue = "";
		$scope.isTextAnalysed = false;
		$scope.textAnalysis = {};
		
		$scope.analyseText = function() {
			//console.log("Method analyseText input : " + $scope.inputValue);
			var analyser = new Analyser();
			
			var wordsArray = analyser.getArrayOfWords($scope.inputValue);
			$scope.textAnalysis.numberOfWords = wordsArray.length;
			
			$scope.textAnalysis.numberOfAlphabeticSymbols = analyser.getNumberOfAlphabeticSymbols($scope.inputValue);
			
			$scope.isTextAnalysed = true;
		}
		
		$scope.resetAnalysis = function() {
			$scope.isTextAnalysed = false;
			$scope.textAnalysis = {};
		}
});