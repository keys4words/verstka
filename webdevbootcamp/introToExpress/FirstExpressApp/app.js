var express = require("express");
var app = express();

// "/" => "hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "goodbye!"
app.get("/bye", function(req, res){
    res.send("goodbye");
});
// "/dog" => "GAV!!!"
app.get("/dog", function(req, res){
    console.log("someone made a request to /dog");
    res.send("GAV!!!");
});

app.listen(3000, function(){
    console.log("Server has running...");
});