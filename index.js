<!DOCTYPE html>
<html>
<head>

<title>APW Final Project</title>
<link href ="style.css" rel ="stylesheet">
<link href= "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
<script src = "main.js"></script> 



</head>


<body>
<h1>the way to life </h1>


<form id = "quiz" name = "quiz">



<p class = "questions">What is 7 x 4?</p>
<input type = "radio" id = "mc" name = "question1" value = "21"> 21<br>
<input type = "radio" id = "mc" name = "question1" value = "27"> 27<br>
<input type = "radio" id = "mc" name = "question1" value = "28"> 28<br>



<p class = "questions">What is 16 / 4?</p>

<input type = "radio" id = "mc" name = "question2" value = "4"> 4<br>
<input type = "radio" id = "mc" name = "question2" value = "6"> 6<br>
<input type = "radio" id = "mc" name = "question2" value = "3"> 3<br>


<p class = "questions">What is 36 + 42</p>
<input id = "textbox" type = "text" name = "question3">

<p class = "questions">What is 8 x 12?</p>

<input type = "radio" id = "mc" name = "question4" value = "88"> 88<br>
<input type = "radio" id = "mc" name = "question4" value = "112"> 112<br>
<input type = "radio" id = "mc" name = "question4" value = "96"> 96<br>



<input id = "button" type = "button" value = "I'm Done" onclick = "check();">


</form>

<div id = "after_submit">
<p id = "number_correct"></p>
<p id = "message"></p>
<img id = "picture">
</div>
</html>

</body>
