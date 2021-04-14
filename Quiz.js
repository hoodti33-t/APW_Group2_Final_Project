//@author Timothy Hood,Taylor Maiorini
//
//4/7/2021
//
//Verion 1.0
//
var http = require("http");
var qString = require("querystring");
const express = require("express"); 
let quiz = express();
var pos = 0; 
//var correct  = 0;
//var test, test_status, question, choice, choices, chA, chB, chC, chD;

var  questions = [
    {
        question1: "What is the Secret of Life?",
        a: "42",
        b: "Happiness",
        c: "Fortune",
        d: "Food",
        answer: "A"
    },
    {
        question2: "What is Batman's Secret Identity?",
        a: "Christain Bale", 
        b: "Thomas Wayne", 
        c: "Bruce Wayne", 
        d: "Michael Keaton", 
        answer: "C"
    },
    {
        question3: "What is Superman's Secret Identity?",
        a: "Johnathen Kent",
        b: "Connor Kent",
        c: "Christopher Reeve",
        d: "Clark Kent",
        answer: "D"
    },
    {
        question4: "Who is Spider-man's Girlfriend?",
        a: "Mary Jane",
        b: "Betty Brant",
        c: "Jean Grey",
        d: "Stephanie Brown",
        answer: "A" 
    },    {
        question5: "Who is Luke's Father?",
        a: "Obi-Wan Kenobi",
        b: "Darth Vader",
        c: "Uncle Owen",
        d: "Han Solo",
        answer: "B"
    },
    {
        question6: "What is the Final Frontier?",
        a: "Space",
        b: "Alabama", 
        c: "Rowan",
        d: "The Wild West",
        answer: "A"
    },
    {
        question7: "what enemies of the Doctor EXTERMINATE!!!!!!?",
        a: "Weeping Angles",
        b: "The Silence", 
        c: "Dalekd",
        d: "Cybermen",
        answer: "C"

    }
];
function get(x){
    return document.getElementById(x);
  }
// this function renders a question for display on the page
function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
// display the question
test.innerHTML = "<h3>"+question+"</h3>";
// display the answer options
// the += appends to the data we started on the line above
test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
  // Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
