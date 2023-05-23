let favMovies = [
    {
        title: "Mary Poppins",
        year: 1964,
        rating: 7.8,
        description: "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
		director: "Robert Stevenson",
		writer: "P.L. Travers",
		stars: "Julie Andrews, Dick Van Dyke",
		genre: "musical"
    },
    {
        title: "Scream",
        year: 1996,
        rating: 7.4,
        description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
		director: "Wes Craven",
		writer: "Kevin Williamson",
		stars: "Neve Campbell, Courteney Cox",
		genre: "horror"
    },
    {
        title: "Mr. Nobody",
        year: 2009,
        rating: 7.8,
        description: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
		director: "Jaco Van Dormael",
		writer: "Jaco Van Dormael",
		stars: "Jared Leto, Sarah Polley",
		genre: "drama"
    },
    {
        title: "The Fast and the Furious: Tokyo Drift",
        year: 2006,
        rating: 6.0,
        description: "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
		director: "Justin Lin",
		writer: "Chris Morgan",
		stars: "Lucas Black, Sung Kang",
		genre: "action"
    }
];

for (let movies of favMovies)
console.log(movies.title);
for (let i = 0; i< favMovies.length; i++) {
	console.log(favMovies[i].title)
};
let totalRate = 0
for (let movies of favMovies) { 
totalRate += movies.rating
};
let averageRate = totalRate / favMovies.length;
console.log("This is the movies avarage rate: ", averageRate);
let NewestMovie = favMovies[0];
for (let movies of favMovies) {
	if ( movies.year > NewestMovie.year) {
		NewestMovie = movies;
	}
};
console.log("The newest movie is: ", NewestMovie);
let starsByMovies = "";
for (let movies of favMovies) {
	starsByMovies += movies.title + "\n\n";
	for (let star of movies.stars) {
		starsByMovies += star 
	}
	starsByMovies += "\n_\n\n";
};
console.log(starsByMovies);