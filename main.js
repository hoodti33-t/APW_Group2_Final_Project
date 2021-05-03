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

let dbManager = require('./dbManager');
let main = express();
let path = require('path')

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
    //Login 
    main.get('/', function (req, res){
        if (!req.session.user){
            res.redirect('/login');
        }
        else{
            res.render('index', {trusted: req.session.user});
        };
        main.use(function(req, res, next){
            let now = new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"});
            console.log(`${req.method} Request to ${req.path} Route Received: ${now}`);
            next();
        });
    });
        main.get('/login', function(req, res, next){
            if (req.session.user){
                res.redirect('/');
            }else{
                res.render('login');
            }
        });
        main.get('/insert', function (req, res){
            if (!req.session.user){
                res.redirect('/login');
            }
            else{
        
                res.render('insert', {trusted: req.session.user});
            }
        });
        main.get('/search', function(req, res, next){
            if (!req.session.user){
                res.redirect('/login');
            }
            else{
        
                res.render('search', {trusted: req.session.user});
            }
        });
        main.get('/signup', (req, res)=>{
            res.render('signup');
        })
    //Post Routes
    main.post('/signup', express.urlencoded({extended:false}), async (req, res, next)=>{
        console.log(req.body.user); 
        if (req.body.user.split(/[;:,-\s ]+/).length > 1) {
	      res.render('signup', {msg: "Usernames must be one word"})
    }
        if (req.body.password.toString() != req.body.confirm.toString()){
	         res.render('signup', {msg: "Passwords must match"});
    }
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
