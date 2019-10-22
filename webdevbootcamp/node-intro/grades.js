function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    var avg = total/scores.length;
    return Math.round(avg);
}

    
    
var scores = [90, 98, 89, 100, 100, 86, 93];
console.log("First:")
console.log(average(scores));

var scores2 = [40, 58, 78, 91, 50, 69, 88, 57];
console.log("Second:")
console.log(average(scores2));