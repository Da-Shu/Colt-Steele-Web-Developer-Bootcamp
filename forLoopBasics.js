// While vs for

var str = "hello";
var count = 0;

while(count < str.length) {
	console.log(str[count]);
	count++;
}

// Same thing using For Loop

var str = "hello";

for(var i = 0; i < str.length; i++) {
	console.log(str[i]);
}