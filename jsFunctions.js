// isEven()

// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false
// 	}
// }

// REFACTORED
function isEven(num) {
	return num % 2 === 0;
}

// FACTORIAL

// function factorial(num) {
// //Define a result variable
// 	var result = 1;
// //calculate factorial and store value in result
// 	for(var i = 2; i <= num; i++) {
// 		result *= i;
// 	}
// //return result variable
// 	return result;
// }


function factorial(num) {
	if(num === 0) {
		return 1;
	}
//Define a result variable
	var result = num;
//calculate factorial and store value in result
	for(var i = num - 1; i >= 1; i--) {
		result *= i;
	}
//return result variable
	return result; 
}

// kebabToSnack - convert kebabCase to snake_case

function kebabToSnake(str) {
	// replace all '-' with "_"s 
	var newStr = str.replace(/-/g , "_");
	// return str
	return newStr
}
