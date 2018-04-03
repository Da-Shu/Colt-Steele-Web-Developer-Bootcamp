var button = document.querySelector("button");
isOrange = false;

button.addEventListener("click", function() {
		//if white
		if(isOrange) {
			document.body.style.background = "white";
			// isOrange = false;
		} else {
			document.body.style.background = "orange";
			// isOrange = true;
		}
			//refactor isOrange
			isOrange = !isOrange;
	});

//can also create a CSS class, where the body is purple, and toggle it off and on
	//button.addEventListener("click", function() {
	// 	document.body.classlist.toggle("orange");
	// });