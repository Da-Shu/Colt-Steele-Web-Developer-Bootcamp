var todos = [];

var input = prompt("what would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		newTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	var input = prompt("what would you like to do?");
}
console.log("Okay, you quit the app")

//Refactored code
function listTodos() {
	console.log("**********");
	todos.forEach(function(todo, item) {
		console.log(item + ": " + todo);
	});
	console.log("**********");
}
function newTodo(){
	//ask for new todo
	var newTodo = prompt("enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}
function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");
}