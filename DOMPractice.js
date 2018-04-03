var tag = document.querySelector("h1");

tag.textContent;

tag.innerHTML;

document.querySelector("h1").textContent = "End of this lesson.";

//Changing attributes

var img = document.getElementsByTagName("img");

img.getAttribut("src");

//Make h1 change color when clicked on
var h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
	alert("h1 was clicked!");
});
	//if you run the above code, then change the "alert" to h1.style.color = "red", it will still show the alert, then change the color to red.

//add listener to ul
document.querySelector("ul").addEventListener("click", function() {
	console.log("You clicked the ul!");
});

//add listener to all li's
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.style.color = "green";
	})
} 
