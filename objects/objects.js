function sayHello(){
	alert("It's working.");
};

var friend = {
	firstName	: "Paul",
	lastName	: "O'Connor",
	age			: 39

};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;
document.getElementById("name").innerHTML = friend.firstName;


var houseOfCards = {
	showname : "House of Cards",
	episodeNo : 1,
	episodeDesc : "The viewer is introduced to the nefarious ways of Mr. Frank Underwood."
}

document.getElementById("show-name").innerHTML = houseOfCards.showname;
document.getElementById("episode-number").innerHTML = houseOfCards.episodeNo;
document.getElementById("episode-description").innerHTML = houseOfCards.episodeDesc;


var netflixShow = {
	
	//Properties
	showName : "",
	epNumber : 1,
	epDescription : "",
	
	//Methods
	watchNow 	: function(){
		alert("You are now queueing up " + this.showName + " " +this.epNumber);
	}
}


var drWho = Object.create(netflixShow);
drWho.showName = "Dr. Who";
drWho.epNumber = 1;
drWho.epDescription = "Mannequins come alive.";

document.getElementById("show").innerHTML = drWho.showName;
document.getElementById("episode-num").innerHTML = drWho.epNumber;
document.getElementById("episode-desc").innerHTML = drWho.epDescription;

/*************More complex object literals**************/

var amazonPrimeShow = {
	//PROPERTIES
	showId		: 1,
	name        : "Paul's Happiest Times",
	description : "This is the happiest show on the planet",
	seasonInfo	: {
		seasonNumber: 1,

		printDetails : function(){
			document.write(description);
				
		},

		episodes    : [
			{episodeNumber: 1, episodeName: "Happy Stuff"},
			{episodeNumber: 2, episodeName: "THe Real Happy Story of Paul"},
			{episodeNumber: 3, episodeName: "Even happier than before"}
		]
	},
};

//document.write(amazonPrimeShow.seasonInfo.episodes[0].episodeName);


for (info in amazonPrimeShow.seasonInfo.episodes){
	document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
}















