// Function to check if the entered number is greater than 7 and print a message
function checkNumber(number) {
    if (number > 7) {
      console.log("Hello");
    }
  }
  
  // Function to check if the entered name matches "John" and print the appropriate message
  function checkName(name) {
    if (name === "John") {
      console.log("Hello, John");
    } else {
      console.log("There is no such name");
    }
  }
  
  // Function to filter and print array elements that are multiples of 3
  function filterMultiplesOf3(arr) {
    const multiplesOf3 = arr.filter(num => num % 3 === 0);
    console.log("Array elements that are multiples of 3:", multiplesOf3);
  }
  
  
  // Interactive input and processing
  function processInput() {
    const num = parseInt(prompt("Please enter a number:"));
    checkNumber(num);
  
    const name = prompt("Please enter a name:");
    checkName(name);
  
    const arrInput = prompt("Please enter an array of numbers separated by spaces:");
    const arr = arrInput.split(" ").map(Number);
    filterMultiplesOf3(arr);
  
  }
  
  processInput();
  