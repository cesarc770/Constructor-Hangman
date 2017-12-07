var wordList = ['apple', 'bannana', 'watermelon'];
var rn = require('random-number');

var Word =  function(wordList){
	this.wordList = wordList,
	this.currentWord = "default",

	this.getWord = function(){
		var options ={
			min: 0,
			max: (this.wordList.length -1),
			integer: true
		}

		this.currentWord = this.wordList[rn(options)];
		console.log(this.currentWord);
	}
};

//Test
// var example = new Word(wordList);
// example.getWord();

module.exports = Word;