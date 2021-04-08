const express = require('express'); 
const { startDb } = require('./db')
const quiz = express();

quiz.get('/',(req, res) => { 
    res.send('Hello World'); //Message shown in server

});

quiz.use((req,res) => {
    res.status(404)
    .send('Unknown Request'); // Puts in Error Message
});
startDb()
    .once('open',() => {
        quiz.listen(8080,() => { //8080 is the port
            console.log("Server is running...")  // to show that the code is working
});
    }); 

//Credit to hungryturtlecode.com 
//Author Adrian
