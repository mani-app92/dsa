function palindromeNumber(number){
    if(number < 0) { return false }
    if(isNaN(number)){ return false };
    
    let tempReversed = 0;
    let copyNumber = number;

    while(number > 0){
        const lastDigit = number % 10;
        tempReversed = (10 * tempReversed) + lastDigit;
        number = Math.floor(number / 10);
    }

    return tempReversed === copyNumber
}

const number = 10;

const isPalindrome = palindromeNumber(number);

console.log(isPalindrome);