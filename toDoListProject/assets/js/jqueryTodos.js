//Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});
//Click X to remove todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});
//Add new todos
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//get new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
})
//toggle the input box
$("#plusSign").click(function() {
	$("input[type='text']").fadeToggle();
});




//THIS WAS REPLACED BY TOGGLECLASS
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none",
// 		});
// 	} else {
// 		$(this).css({
// 			color: "rgb(128, 128, 128)",
// 			textDecoration: "line-through",
// 		});
// 	}
// });
