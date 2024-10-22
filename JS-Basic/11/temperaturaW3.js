// Define a function to convert Celsius to Fahrenheit
function cToF(celsius) {
  // Store the input Celsius temperature in a variable
  var cTemp = celsius;

  // Calculate the equivalent Fahrenheit temperature
  var cToFahr = (cTemp * 9) / 5 + 32;

  // Create a message string describing the conversion result
  var message = cTemp + "\xB0C is " + cToFahr + " \xB0F.";

  // Log the message to the console
  console.log(message);
}

// Define a function to convert Fahrenheit to Celsius
function fToC(fahrenheit) {
  // Store the input Fahrenheit temperature in a variable
  var fTemp = fahrenheit;

  // Calculate the equivalent Celsius temperature
  var fToCel = ((fTemp - 32) * 5) / 9;

  // Create a message string describing the conversion result
  var message = fTemp + "\xB0F is " + fToCel + "\xB0C.";

  // Log the message to the console
  console.log(message);
}

// Call the cToF function with a Celsius temperature of 60
cToF(60);

// Call the fToC function with a Fahrenheit temperature of 45
fToC(45);
