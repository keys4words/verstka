var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Tony", "Jaa", "Bruce", "Lee", "Mike", "Tyson"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
})

app.listen(3000, function(){
    console.log("server starting...");
});