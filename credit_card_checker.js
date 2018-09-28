function removeDashes(cardNum) {
    //Remove dashes from creditCardNum string
    let ccNumberNoDashes = ''.replace()
    return ccNumberNoDashes;
}

function isValidLength(cardNum) {
    // The credit card number must be 16 digits in length
    if (cardNum.length !== 16) {
        return false;
    }
    return true;
}

function hasInvalidChar(cardNum) {
    // All of the digits must be numbers
    for (var i = 0; i < cardNum.length; i++) {
        // store the current digit 
        var currentNumber = cardNum[i];

        // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
        currentNumber = Number.parseInt(currentNumber);

        // check that the digit is a number
        if (!Number.isInteger(currentNumber)) {
            return false;
        }
    }
    return true;
}

function hasOddFinalNumber(cardNum) {
    // The final digit of the credit card number must be even
    if (cardNum[cardNum.length - 1] % 2 !== 0) {
        return false;
    }
    return true;
}

function hasInvalidSum(cardNum) {
    var sum = 0;
    for (var i = 0; i < cardNum.length; i++) {
        sum += Number(cardNum[i]);
    }
    if (sum <= 16) {
        return false;
    }
    return true;
}

function hasAllDifferentNumbers(cardNum) {
    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    var obj = {};
    for (var i = 0; i < cardNum.length; i++) {
        obj[cardNum[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return false;
    }
    return true;
}

function isValidCreditCardCheck(cardNum) {
    let ccNumberNoDashes = removeDashes(cardNum);
    let _ValidLength = isValidLength(ccNumberNoDashes)
    let _InvalidChar = hasInvalidChar(ccNumberNoDashes)
    let _OddFinalNumber = hasOddFinalNumber(ccNumberNoDashes)
    let _InvalidSum = hasInvalidSum(ccNumberNoDashes)
    let _AllDifferentNumbers = hasAllDifferentNumbers(ccNumberNoDashes)

    let isValid = _ValidLength && _InvalidChar && _OddFinalNumber && _InvalidSum && _AllDifferentNumbers;

    return isValid;
}


/**** tests *****/
console.log(isValidCreditCardCheck('9999-9999-8888-0000')); //true
console.log(isValidCreditCardCheck('6666-6666-6666-1666')); //true
console.log(isValidCreditCardCheck('a923-3211-9c01-1112')); //false
console.log(isValidCreditCardCheck('4444-4444-4444-4444')); //false
console.log(isValidCreditCardCheck('1211-1111-1111-1112')); //true