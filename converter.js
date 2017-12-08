
let input = document.getElementById("input");
let celcius = document.getElementById("cel");
let fahrenheit = document.getElementById("fah");
let clear = document.getElementById("clear");
let converter = document.getElementById("converter");
let output = document.getElementById("output");



function toCelcius () {
  // celcius = (fahrenheit value - 32) * .5556
  let celciusValue = (input.value - 32) * .5556;
}

function toFahrenheit () {
  // fahrenheit = celcius value * 1.8 + 32
  let fahrenheitValue = 
}


// Get a reference to the button element in the DOM
let button = document.getElementById("converter");


// Determine which conversion should happen based on which radio button is selected
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);