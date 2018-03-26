movies.forEach(function(movie) {
	console.log(buildString(movie));
});

var movies = [
		{
			name: "Tombstone",
			hasWatched: true,
			rating: 5
		},
		{
			name: "IP Man",
			hasWatched: true,
			rating: 4.5
		},
		{
			name: "Black Panther",
			hasWatched: false,
			rating: 4.5
		}
	]

function buildString(movie) {
		var result = "You have ";
	if(movie.hasWatched) {
		result += "seen ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - "; 
	result += movie.rating + " stars";
	return result;
}

