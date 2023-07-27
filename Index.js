function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const inputString = prompt('please enter String');
  const outputString = reverseString(inputString);
  console.log(outputString);

//   Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  
  const inputArray = [2, -5, 10, -3, 7];
  const result = sumOfPositiveNumbers(inputArray);
  console.log(result);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
  function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
  
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const output = findTwoNumbersWithSum(sortedArray, targetValue);
  console.log(output); 


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
  function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter the operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }
  
    switch (operator) {
      case '+':
        alert(`Result: ${num1} + ${num2} = ${num1 + num2}`);
        break;
      case '-':
        alert(`Result: ${num1} - ${num2} = ${num1 - num2}`);
        break;
      case '*':
        alert(`Result: ${num1} * ${num2} = ${num1 * num2}`);
        break;
      case '/':
        if (num2 === 0) {
          alert("Error: Cannot divide by zero");
        } else {
          alert(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
      default:
        alert("Error: Invalid operator");
    }
  }
  
  calculator();

//   Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

  function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?";
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const password = generateRandomPassword(8);
  console.log(password);

//   Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];
  
      if (nextNumeral > currentNumeral) {
        result += nextNumeral - currentNumeral;
        i++;
      } else {
        result += currentNumeral;
      }
    }
  
    return result;
  }
  
  console.log(romanToInteger("IX")); 
  console.log(romanToInteger("XXI")); 
  
//   Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("There is no second smallest element.");
    }
  
    return secondSmallest;
  }
  
  const numbers = [10, 5, 2, 8, 3, 9, 7];
  console.log(findSecondSmallest(numbers)); 
  
  
  