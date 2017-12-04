
let input = document.getElementById("input");
let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let clear = document.getElementById("clear");
let converter = document.getElementById("converter");
let output = document.getElementById("output");



function toCelcius () {

}

function toFahrenheit () {

}


// Get a reference to the button element in the DOM
let button = document.getElementById("converter");


// Determine which conversion should happen based on which radio button is selected
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);