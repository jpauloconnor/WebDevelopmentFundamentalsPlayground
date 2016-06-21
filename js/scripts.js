//JavaScript Review File

console.log("Happy!");


//Variables Strings & Ints
var age = 39;
var myBirthYear = 1976;
var graduationYear = 1994;
var numberOfBrothersAndSisters = 1;
var numberOfKids = 2;
var P = ".";

var somethingFunny = "Pacers won the SuperBowl";

//String concatenation
console.log("I am " + age + ".");
console.log("I was born in " + myBirthYear + ".");
console.log("I graduated from high school in " + graduationYear + ".");
console.log("I have " + numberOfBrothersAndSisters + " brothers and sisters" + P);
console.log("I have " + numberOfKids + " kids" + P);

//Manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("graduation-year").innerHTML = graduationYear;
document.getElementById("number-of-kids").innerHTML = numberOfKids;

//Functions
function revealFunny(){
	document.getElementById("reveal-funny-line").innerHTML = somethingFunny;
}


var famousBasketballStory1 = "I met Isaiah Thomas in Bloomington. He jumped on stage and started singing with my band.";
var famousBasketballStory2 = "I met Larry Bird at a Pacers game. I snuck into a box seat after a game and was eating food when he came in and started eating with me.";
var famousBasketballStory3 = "I met Bobby Knight in Bloomington. I saw him at a restaurant, and told him that they did a great job. They had just beaten Purdue. He asked me what was so great.";

document.getElementById("famousBasketballStory1").innerHTML = famousBasketballStory1;
document.getElementById("famousBasketballStory2").innerHTML = famousBasketballStory2;
document.getElementById("famousBasketballStory3").innerHTML = famousBasketballStory3;

//REVEAL IN HTML PAGE.
function revealLie(){
	document.getElementById("falsebballstory").innerHTML = famousBasketballStory3;
}


//While Loop
var counter = 0;
while(counter < 10){
	counter++;
	console.log("The score is " + counter);
}


//LOOPS
//For Loop
for (var i = 1; i < 20; i++){
	console.log(i);
}

//Print to 30 by 5s
for (var i = 0; i < 31; i+=5){
	console.log(i);
}

for (var i = 5; i < 100; i+=10){
	console.log(i);
}


for (var i = 0; i < 101; i += 25){
	if (i===50){
		console.log(i + " Halfway there");
	} else {
		console.log(i);
	}
}


for (var i = 1; i < 11; i++){
	if(i===9){
		console.log("Nine");
	} else if(i===10){
		console.log("Ten");
	} else {
		console.log(i);
	}
}


var friends = ["Bryce", "Joey", "Stephanie", "Sasha"];
var friendList = "";

for (i = 0; i < friends.length; i++){
	friendList += friends[i];
	
}

console.log(friendList);



for (var word="word"; word.length<8; word += "word"){
	console.log(word);
}

for (var i = "#"; i.length < 8; i += "#") {
	console.log(i);
}












//For Loops

var counter = 0    //First we create a container for an integer.
while (counter < 10) {  // Condition that we'll set. If we set to 500, that's a lot/ 
	counter = counter + 1;  // This will keep adding 1 to counter.
	//First time through 0 + 1, 
	//Second time through, counter is now equal to 1, so we have 1 + 1,
	//Third time, 2 + 1 ... up until what?
	//Discuss counter < 10 and ask what will the last number equal and why?
	//console.log("The counter equals " + counter);
	document.getElementById("loop-message").innerHTML = counter;
}


/*
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

*/


//Arrays

var abc = "abcdefghijklmnopqrstuvwxyz";
var abcArray = ["a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

//Another way to create an array
var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "Sprite";
typesOfSoda[2] = "Pepsi";

console.log(typesOfSoda);

var worstKindsOfSoda = new Array();
worstKindsOfSoda[0] = "Coke";
worstKindsOfSoda[1] = "Diet Coke";
worstKindsOfSoda[2] = "Coke Zero";
worstKindsOfSoda[3] = "Diet Pepsi";
worstKindsOfSoda[4] = "Diet Mountain Dew";

console.log(worstKindsOfSoda);

var bestCandyBars = ["Snickers", "Twix", "Hershey's with Almonds", "Reese's"];
bestCandyBars[4] = "100 Grand";

//console.log(bestCandyBars);
var mixedArray = [1, "Bill Gates", (5 > 1)];
console.log(mixedArray);


// FOR LOOPS


for(var i = 0; i < 10; i++){
	console.log(i);
}


for(var i = 0; i<=20; i+=2){
	console.log(i);
}
//Write a for loop that prints 0-20 by 2s.

//Write a for loop that prints 0-50 by 5s.
 //When you get to fifty, print "I'm rich".
for (var i = 0; i < 51; i += 5){
	if (i===50){
		console.log(i + " I'm rich!");
	} else {
		console.log(i);
	}
}

var friends = ["Joshua", "Austin", "Bryce", "Jeremiah", "Nigel", "Darrian", "Jake", "James"];
for(var i = 0;i < friends.length;i++){
	if(friends[i].charAt(0)=="J"){
		console.log(friends[i]);
	}
}

//Objects
var beachBag = {
	//Properties
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,
	//Functions
	zipUp			: function(){
		console.log("zipper sound");
	}
}
console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();

//Make an object called Nerd
//Give five properties hasGlasses
//Give one function

var player = {
	//Properties
	name			: " ",
	life	   	    : 1000,
	damage   		: 10,
	hasSword 		: true,
	hasSniperRifle  : false,
	hasArmor		: true,

	//Functions
	attack			: function(target){
		console.log(this.name + " attacks " + target + this.damage);
	},

	swatWithSword	: function(target){
		var damage = 25 * this.damage;
		console.log(this.name + " did " + damage + " damage to " + target);
	},

	healthBonus     : function(player){
		var extraLife = 10;
		console.log(this.name + " picked up " + extraLife + " life from a health pack");
		player.life += extraLife;
	}


}

//Create an animal object with the following properties:
//a boolean for whether it is living or not
//a boolean for whether it eats or not
//a boolean for if it runs
//a boolean for if it jumps
//how many eyes it has
//a boolean for whether it is cute or not
//Make a silly message function for how it breaths

var animal = {
	living		:true,
	eats		:true,
	runs		:true,
	jumps		:true,
	eyes		:2,
	cute		:true,
	legs		:4,
	breath		: function(){
		console.log("Uncomfortable breathing in your ear.");
	} 
}

animal.breath();

var snake = Object.create(animal);

console.log(snake.eyes);
snake.legs = 0;
console.log(snake.legs);
snake.breath = function(){
	console.log("Hisssssssssssssssssssssssssssssssssssssss");
}
snake.breath();

var rabbit = Object.create(animal);

rabbit.ears = "Huge";
console.log(rabbit.ears);


















