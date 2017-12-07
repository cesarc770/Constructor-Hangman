var Word = require('./Word');
// var wordList = ['apple', 'bannana', 'watermelon'];

var Letter = function(wordList){
	var object = new Word(wordList);
	this.answer = [];
	this.word = object.getWord(),
	this.guesses = 8,

//method to replace spaces with letters
	this.compareLetter = function(letter){
		var found =false;
		for(var i = 0; i < this.word.length; i++){
			if(this.word[i] == letter){
				this.answer[i] = letter;
				found = true;
			}
	}
	if(found){
		console.log("CORRECT!!!");
	}else{
		console.log("INCORRECT!!!");
		this.guesses--;
		
		
	}
	console.log(this.answer.join(" "));
	},

	//method to generate spaces for word to be guessed
	this.generateSpaces = function(){
	
		var str = [];
		for(var i = 0; i < this.word.length; i++){
		if(this.word == " "){
			str[i] = " ";
		}else{
			str[i] = "_";
			}
		}
		this.answer = str;

		console.log(this.answer.join(" "));


	}

	//method to see if word is complete

};


//Test
// var example = new letter(wordList);

// example.generateSpaces();
// example.compareLetter("e");
// example.compareLetter("p");

module.exports = Letter;