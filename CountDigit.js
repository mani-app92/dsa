

function countDigit(digit){

    if(!digit) { return "Value must required to count digit" }
    if(isNaN(digit)) { return "Give value is not digit" }
    if(digit == 0) { return 1 } 

    let tempDigitCount = 0;

    digit = Math.abs(digit);

    while (digit > 0) {
        digit = Math.floor(digit / 10);
        tempDigitCount++;
    }

    return tempDigitCount;
}

const totalCount = countDigit("34534");

console.log(totalCount);
