
let input = document.getElementById("input");
let celcius = document.getElementById("cBtn");
let fahrenheit = document.getElementById("fBtn");
let clear = document.getElementById("clear");
let converter = document.getElementById("converter");
let output = document.getElementById("output");



// Assign a function to be executed when the button is clicked
converter.addEventListener("click", determineConverter);

// Determine which conversion should happen based on which radio button is selected
function determineConverter (clickEvent) {
  if (document.getElementById("cBtn").checked) {
    toCelcius(input.value);
  } else if (document.getElementById("fBtn").checked) {
    toFahrenheit(input.value);
  }
};




function toCelcius (input) {
  let celciusValue = ((input.value - 32) * .5556).toFixed(1);
  if (celciusValue > 32) {
    output.style.color = "red";
  } else if (celciusValue < 0) {
    output.style.color = "blue";
  } else {
    output.style.color = "black";
  }
  output.innerHTML = celciusValue;
}

function toFahrenheit (input) {
  let fahrenheitValue = ((input.value * 9/5) + 32).toFixed(1);
  if (fahrenheitValue > 90) {
    output.style.color = "red";
  } else if (fahrenheitValue < 32) {
    output.style.color = "blue";
  } else {
    output.style.color = "black";
  }
  output.innerHTML = fahrenheitValue;
}




// Clear button
let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function() {
  input.value = "";
  output.value = "";
  cBtn.checked = false;
  fBtn.checked = false;
})