var Word = require('./Word');
var wordList = ['apple banana'];

var letter = function(wordList){
	var word = new Word(wordList);


	this.generateSpaces = function(){
	word.getWord();
		var str = [];
		for(var i = 0; i < word.currentWord.length; i++){
		if(word.currentWord[i] == " "){
			str[i] = " ";
		}else{
			str[i] = "_";
			}
		}
		console.log(str.join(" "));

	}


};

//Test
// var example = new letter(wordList);
// example.generateSpaces();

module.exports = letter;