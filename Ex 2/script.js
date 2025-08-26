// Calculator Exercise - Complete the missing functionality!

function calculateResult(input1, input2, operation) {
    let result;
    
    // TODO: Add validation to check if input1 and input2 are valid numbers
    // HINT: Use isNaN() function to check if a value is not a number
    if (isNaN(input1) || isNaN(input2)) {
        return "Invalid input! Please enter numbers.";
    }
    // TODO: Complete the code to perform different operations
    switch (operation) {
        case "add":
            result = input1 + input2;
            break;
        case "subtract":
            result = input1 - input2;
            break;
        case "multiply":
            result = input1 * input2;
            break;
        case "divide":
            result = input2 !== 0 ? input1 / input2 : "Error: Cannot divide by 0";
            break;
        default:
            result = "Unknown operation!";
    }
    return result;
}

document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault()
    
    // TODO: Get values from input fields and convert them to numbers
    // HINT: Use parseFloat() to convert string values to floating-point numbers
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const operation = document.getElementById("operation").value;
    // TODO: Call calculateResult function with the inputs
    const result = calculateResult(input1, input2, operation);
    // TODO: Display the result in the result span
    // HINT: Use document.getElementById
    document.getElementById("result").textContent = result;
});