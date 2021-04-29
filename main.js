//Check the users answers 
//
//Credit to Kevin Briggs YouTube: “Java Script Tutorial: Make a quiz
//
//@author Timothy Hood, Taylor Maiorini, Fahima Khashem
//
//version 4/26/21
//Check the users answers 
//
//Credit to Kevin Briggs YouTube: “Java Script Tutorial: Make a quiz
//
//@author Timothy Hood, Taylor Maiorini, Fahima Khashem
//
var http = require("http");
let express = require("express");
//const host = 'localhost';
//const port = 6900;
let dbManager = require('./dbManager');
let main = express();
var ObjectID = require('mongodb').ObjectId;
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "28") { //Question 1's answer ,
		correct++; //If got correct increases score by 1
}
	if (question2 == "4") { // Question 2's answer
		correct++; //If got correct increases score by 1
}	
	if (question3 == "78") { //Question 3's answer
		correct++; //If got correct increases score by 1
	}

	if (question4 == "96") { //Question 4's answer
		correct++; //If got correct increases score by 1
	}
	
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"]; //Images based on their score
	var messages = ["WOW! You're Smart", "So close", "I have seen better", "Go back to school"]; //The feedback after their 
	//scores are revealed
	var score;

	//If statements to tally the users score
	if (correct == 4) {
		score = 0;
	}

	if (correct == 3) {
		score = 1;
	}

	if (correct == 2) {
		score = 2;
	}

	if (correct < 1) {
		score = 3;
	}


	document.getElementById("after_submit").style.visibility = "visible";
	//What is displayed after they submit
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	main.listen(6900, async ()=> {
        //start and wait for the DB connection
        try{
            await dbManager.get("finalProject");
        } catch (e){
            console.log(e.message);
        }

        console.log("Server is running...");

    });
