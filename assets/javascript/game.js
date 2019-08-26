// ========== global variables ========== //

// crystal variables
var crystals = {
	crystal1:
	{
	  name: "Crystal1",
	  value: 0
	},
	crystal2:
	{
	  name: "Crystal2",
	  value: 0
	},
	crystal3:
	{
	  name: "Crystal3",
	  value: 0
	},
	crystal4:
	{
	  name: "Crystal4",
	  value: 0
	}
};

// scores
var userNumber = 0;
var targetNumber = 0;

// wins and losses
var wins = 0;
// shows user wins text in its div
$("#wins").html("<h3>WINS: " + wins + "</h3>");

var losses = 0;
// shows user losses text in its div
$("#losses").html("<h3>LOSSES: " + losses + "</h3>");

// ========== functions ========== //

// this function generates random numbers and console them
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// starts and restarts the game
var startGame = function() {

	// resets the user number
	userNumber = 0;

	// set a new target score number between 19 and 120
	targetNumber = getRandom(19, 120);

	// set different values for each of the crystals between 1 and 12
	crystals.crystal1.value = getRandom(1, 12);
	crystals.crystal2.value = getRandom(1, 12);
	crystals.crystal3.value = getRandom(1, 12);
	crystals.crystal4.value = getRandom(1, 12);

	// change the html to show the user these changes
	$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");
	$("#targetNumber").html("<h3>TARGET NUMBER: " + targetNumber + "</h3>");

	// console log all these stats for ease of debugging
	console.log("Target score: " + targetNumber);
	console.log("Crystal 1: " + crystals.crystal1.value + " | Crystal 2: " + crystals.crystal2.value + " | Crystal 3: " + crystals.crystal3.value + " | Crystal 4: " + crystals.crystal4.value);

	// clears gameStatus div
	$("#gameStatus").empty();

}; // end startGame function

// check to see if the user won or lost; reset the game
var checkWin = function() {

	// if the userNumber is greater than the targetNumber, the user has lost
	if (userNumber > targetNumber) {
		// adds one point to the losses counter
		losses ++;
		// updates html to reflect this
		$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
		// also console logs 
		console.log("Losses count is " + losses);
		// alerts are tacky. this alerts the user to what just happened.
		$("#gameStatus").html("<h2>YOU WENT OVER. CLICK HERE TO TRY AGAIN!</h2>");
	}

	// if the current score is equal to the target, the user has won
	else if (userNumber === targetNumber) {
		// adds one point to the wins counter
		wins ++;
		// updates html to reflect this
		$("#wins").html("<h3>WINS: " + wins + "</h3>");
		// also console logs
		console.log("Win count is " + wins);
		// alerts are tacky. this alerts the user to what just happened.
		$("#gameStatus").html("<h2>PERFECT! CLICK HERE TO TRY AGAIN!</h2>");
	}
};

// respond to clicks on the crystals
var addValues = function(clickedCrystal) {

	// change userNumber
	userNumber += clickedCrystal.value;

	// change the html to reflect changes in userNumber
	$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");

	// call the checkWin function
	checkWin();

	// console log the current score
	console.log("Your Score: " + userNumber);
};

// =========== initialize game and crystal on click functions ========== //

startGame();

$("#gameStatus").click(function() {
	startGame();
})

$("#crystal1").click(function() {
	addValues(crystals.crystal1);
});

$("#crystal2").click(function() {
	addValues(crystals.crystal2);
});

$("#crystal3").click(function() {
	addValues(crystals.crystal3);
});

$("#crystal4").click(function() {
	addValues(crystals.crystal4);
});