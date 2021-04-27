function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "28") {
		correct++;
}
	if (question2 == "4") {
		correct++;
}	
	if (question3 == "78") {
		correct++;
	}

	if (question2 == "96") {
		correct++;
	}
	
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["WOW! You're Smart", "I seen better", "", "Go back to school"];
	var score;

	
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

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
