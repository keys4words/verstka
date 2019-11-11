var request = require('request');
//used this free api https://sunrise-sunset.org/api
//also may use this api for tests https://jsonplaceholder.typicode.com/
//var url = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400';
var url = 'https://jsonplaceholder.typicode.com/users';
request(url, function (error, response, body) {
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        //console.log(parsedData["results"]["sunrise"]);
        parsedData.forEach(element => {
            console.log(element.name + '\t' + element.email + '\t' + element.phone);
        });
    } 
});

