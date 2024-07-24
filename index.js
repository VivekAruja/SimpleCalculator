// Get the display element from the HTML
const display = document.getElementById("display");

// Function to append input (number or operator) to the display
function appendToDisplay(input) {
    display.value += input; // Add the input to the current display value
}

// Function to clear the display (reset it to an empty string)
function clearDisplay() {
    display.value = ""; // Set the display value to an empty string
}

// Function to evaluate the arithmetic expression on the display
function calculate() {
    try {
        // Evaluate the expression and set the result to the display
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error (e.g., invalid expression), show "Error"
        display.value = "Error";
    }
}
