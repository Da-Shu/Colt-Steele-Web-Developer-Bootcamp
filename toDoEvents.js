var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function() {
		this.classList.add("mouseOver");
	});
}for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseout", function() {
		this.classList.remove("mouseOver");
	});
	lis[i].addEventListener("click", function(){
		this.classList.toggle("taskDone");
	});
}
//BELOW WAS THE FIRST STEP FOR MOUSEOVER AND MOUSEOUT, THEN CHANGED TO THE ABOVE, TO APPLY TO AL lis
// firstLi.addEventListener("mouseover", function() {
// 	firstLi.style.color = "green"; //had this linked to CSS and the "black" not linked; after initial color change, wouldn't return to green 
// });

// firstLi.addEventListener("mouseout", function() {
// 	firstLi.style.color = "black"; 
// })
