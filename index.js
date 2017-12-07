var inquirer = require('inquirer');
var wordList = ['apple', 'bannana', 'watermelon', 'table', 'computer', 'couch', 'taxes', 'octopus', 'shark', 'lion', 'children', 'economy', 'television', 'program', 'encapsulation', 'polymorphism', 'inheritance', 'node', 'inquirer'];
var Letter = require('./Letter');

begin();

    function play(object){
   inquirer
    .prompt({
      name: "choice",
      type: "input",
      message: "Guess a letter"
    }).then(function(answer){
    	object.compareLetter(answer.choice);
    	if(object.guesses > 0){
			console.log("Guesses remaining: "+ object.guesses);
		}
		else{
			console.log("\n You ran out of Guesses!!\n The word was: " +object.word+"\nSORRY!! Better luck next time!\n");
			begin();
			return;
		}
    	if(object.answer.indexOf("_") > -1){
    		play(object);
    	}else{
    		console.log("\nNext Word...");
    		var Current = new Letter(wordList);
    		Current.generateSpaces();
    		play(Current);
    	}
    	

    });


    }//end of play()


function begin(){
	inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Play Game",
        "Exit"
      ]
    }).then(function(answer){
    	switch(answer.action){
    		case "Play Game":
    		var Current = new Letter(wordList);
    			Current.generateSpaces();
    			play(Current);
    			break;
    		case "Exit":
    			console.log("Thank you for playing!");
    			break;
    	}
    });
	}
