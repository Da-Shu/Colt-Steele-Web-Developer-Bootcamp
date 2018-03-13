var todos = [];

var input = prompt("what would you like to do?");

while(input !== "quit") {

	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		//ask for new todo
		var newTodo = prompt("enter new todo");
		//add to todos array
		todos.push(newTodo);
	}

	var input = prompt("what would you like to do?");
}
console.log("Okay, you quit the app")