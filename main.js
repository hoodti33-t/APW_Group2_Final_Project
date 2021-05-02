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
let path = require('path')
//var ObjectID = require('mongodb').ObjectId;
//Make different file 
//Public folder
//include in pug

	main.set('views', './views');
	main.set('view engine','pug');
	main.use(express.static(path.join(__dirname, 'public')));
	main.get('/', function(req, res, next) {
		//res.send("Welcome to our quiz");
		res.render('index')

	});
	main.listen(6900, async ()=> {
        //start and wait for the DB connection
        try{
            await dbManager.get("FinalProject");
        } catch (e){
            console.log(e.message);
        }

        console.log("Server is running...");

    });
