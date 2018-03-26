//Reverse [1,2,3,4]
function printReverse(arr) {
	for(var i = arr.length -1; i >= 0, i--) {
		console.log(arr[i]);
	}
}

printReverse([4, 3, 2, 1])

// var num = [1, 2, 3, 4];
// var reversed = num.reverse();

// 	console.log("**********");
// reversed.forEach(function(nums) {
// 	console.log(nums);
// });
// 	console.log("**********");

// //Reverse ["a", "b", "c"]
// var num = ["a", "b", "c"];
// var reversed = num.reverse();
// 	console.log("**********");
// reversed.forEach(function(nums) {
// 	console.log(nums);
// });
// 	console.log("**********");


//**********isUniform**********

function isUniform(arr) {
	var first = arr[0];
	for(i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
}

//*****sumArray******
function sumArray(arr) {
	var total = 0;
	forEach(function(element) {
		total += element;
	}
	return total;
}

//*****max*****
function max(arr) {
	var max = arr[0]
	for(var i = 1; i < arr.lentth; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

function max(arr) {
	var max = arr[0];

	for(var i = 1; i <  arr.length; i++) {
		if(arr[i] < max) {
			max = arr[i];
		}
	}
	return max;
}
