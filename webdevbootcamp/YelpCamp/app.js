var express = require("express");
var app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "http://creopatra.com/wp-content/uploads/2019/07/1564335639-8174-camping-tents.0-1024x683.jpg"},
        {name: "Granite Hill", image: "https://cdn3.img.ria.ru/images/152432/02/1524320223.jpg"},
        {name: "Mountain Goat's Rest", image: "https://gazettereview.com/wp-content/uploads/2016/07/15509034217_b93d8916a2_k-1024x680.jpg"}
    ];
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
    console.log("YelpCamp server has starting...");
});