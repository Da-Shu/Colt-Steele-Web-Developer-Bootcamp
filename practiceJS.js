var things = ["thing1", "thing2", "thing3", "thing4"];

var thingCount = 0

	while(thingCount < things.length) {
		console.log(things[thingCount]);
		thingCount++;
	}

//for loop
var things = ["thing1", "thing2", "thing3", "thing4"];

	for(i = 0; i < things.lenght; i++) {

		console.log(things[i]);
	}

//forEach
var things = ["thing1", "thing2", "thing3", "thing4"];

	things.forEach(function(thing) {
		console.log(thing);
	});
	//you could pass a function that you have already defined in your code, rather than just "function(thing)"

//isEven()
function isEven(num) {
	var number = num
	if(num % 2 === 0) {
		console.log(number + " is even");
	} else {
		console.log(number + " is not even");
	}
}

//even between 0 and 10
for(i = 0; i <= 10; i+= 2) {
	console.log([i]);
}
//forEach
var arr = ([1, 2, 4, 3, 7, 6, 9, 5, 0, 8]);
 arr.forEach(function(num){
 	if(num % 2 === 0) {
 		console.log(num + " is even");
 	}
 	else {
 		console.log(num + " is odd")
 	}
 });
