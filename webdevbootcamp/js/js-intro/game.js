var secretNumber = 4;
var guess = Number(prompt('Guess a number'));

if(guess === secretNumber){
    alert("YOU GOT IT RIGHT");
} else if (guess > secretNumber){
    alert("TOO HIGH! Try again");
} else{
    alert("TOO LOW! Try again");
}