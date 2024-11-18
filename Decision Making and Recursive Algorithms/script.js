function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const n = 6; 
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);



//--------------------------------------------------------------


function isPalindrome(str) {

    str = str.replace(/[\W_]/g, '').toLowerCase();
    
    function checkPalindrome(s) {
        if (s.length <= 1) return true;
        if (s[0] !== s[s.length - 1]) return false;
        return checkPalindrome(s.slice(1, s.length - 1));
    }
    
    return checkPalindrome(str);
}

const inputString = "GoMyCode";
console.log(`Is the string a palindrome? ${isPalindrome(inputString)}`);