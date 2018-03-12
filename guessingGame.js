// create secret number
var secretNumber = 7;
// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right
if(guess === secretNumber) {
	alert("You guessed correctly!");
}
// otherwise check if higher
else if(guess > secretNumber) {
	alert("Sorry, guess lower.");
}
// otherwise check if lower
else {
	alert("Sorry, guess higher.");
}






// var number = prompt("Guess a number!");

// if(number < 7) {
// 	alert("Too low, guess again!");
// }
// if(number > 7)	{
// 	alert("Too high, guess again!");
// }
// if(number == 7) {
// 	alert("Lucky number 7 is correct!");
// }