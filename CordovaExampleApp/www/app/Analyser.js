"use strict";

// Constructor
var Analyser = function() {
	
	this.getArrayOfWords = function(inputText) {
		//var wordsArray = inputText.split(/[.,:!?"'\s]+/);
		var wordsArray = inputText.split(/\W+/);
		if (wordsArray[wordsArray.length - 1] === "") {
			wordsArray.pop();
			//wordsArray.splice(wordsArray.length - 1, wordsArray.length);
		}
		//console.log("wordsArray : " + wordsArray);
		return wordsArray;
	}
	
	this.getNumberOfAlphabeticSymbols = function(inputText) {
		var textWithOnlyAlphabeticSymbols = inputText.replace(/\W/g, "");
		//console.log("textWithOnlyAlphabeticSymbols : " + textWithOnlyAlphabeticSymbols);
		return textWithOnlyAlphabeticSymbols.length;
	}
	
}