var request = require('request');
//used this free api https://sunrise-sunset.org/api
//also may use this api for tests https://jsonplaceholder.typicode.com/
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', function (error, response, body) {
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["results"]["sunrise"]);
    } 
});

