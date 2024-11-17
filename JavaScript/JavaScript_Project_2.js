// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
// Count characters in a string
  function countCharacters(str) {
    return str.length;
  }
  
// Capitalize first letter of each word
  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }


//------------------------------------------------------------


// Find maximum and minimum values in an array
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return [min, max];
  }
  
// Sum of array elements
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
// Filter array based on a condition
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }


//------------------------------------------------------------



// Factorial of a number
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
// Check if a number is prime
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
// Generate Fibonacci sequence
  function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }