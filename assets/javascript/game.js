
// these are the gems I added random values betwwen 1 and 12 and the computer random pick between 19 and 120
var redJewel= Math.floor(Math.random()* 12)+1;
var pinkJewel= Math.floor(Math.random()* 12)+1;
var greenJewel= Math.floor(Math.random()*12)+1;
var blueJewel= Math.floor(Math.random()*12)+1;

var computerNumber= Math.floor()

// this is counters for the game what the consoe logs are going to affect
var lossCount=0
var winCount=0
var yourScore=0

// telling comp to log the inputs of the varibles
 console.log (redJewel)
 console.log (pinkJewel)
 console.log (greenJewel)
 console.log (blueJewel)
 console.log( computerNumber)

// writing the random number to the user in the html page
$(checkhtml).ready(function() {
    $("#computerNumber").html(computerNumber);

    $('#yourScore').html(yourScore);

    $("#lossCount").html(lossCount);

    $('#winCount').html(winCount);

    // this is where I am making the crystal add value to the total user score and checks for a win or loss to restart the game


}
