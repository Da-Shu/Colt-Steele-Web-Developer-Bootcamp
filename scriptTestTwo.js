var age = Number(prompt("What is your age?"));

if(age <= 0) {
	console.log("No way bro!");
}
if(age === 21) {
	console.log("Happy 21st Birthday!");
}

// If age is odd
if(age % 2 !== 0) {
	console.log("Your age is an odd number.");
}

// If age is a perfect square
if(age % Math.sqrt(age) ===0) {
	console.log("Your age is a perfect square!  Neat!");
}