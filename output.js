// Problem: 1
// mindGame function takes a positive number as input, then multiply 3 with the input number,
// then add 10 to it, then divide it by 2, then subtract 5 from it and then returns the result/value
// of these operations

function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please, Provide A Valid Number Input.';
    }
    if (number < 0) {
        return 'Please, Input A Positive Number.';
    }
    number *= 3;
    number += 10;
    number /= 2;
    number -= 5;
    return number;
}

console.log(mindGame(33));


// Problem: 2
// evenOdd function takes a string as input. Then depending on the character count of the string,
// if the character count is an even number, returns 'even'
// if the character count is an odd number, returns 'odd'

function evenOdd(word) {
    if (typeof word !== 'string') {
        return 'Please, Provide A Valid String Input.';
    }
    const characterCount = word.length;
    if (characterCount % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

console.log(evenOdd('chatgpt'));


// Problem: 3
// isLGSeven function takes a number as input. Then subtracts 7 from the input number.
// if the subtraction result is less than 7, it returns the subtraction result
// otherwise it returns double of the input number

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please, Provide A Valid Number Input.';
    }
    const result = number - 7;
    if (result < 7) {
        return result;
    }
    else {
        return number * 2;
    }
}

console.log(isLGSeven(15));


// Problem: 4
// findingBadData function takes an array of numbers as input
// if any number/element of the array is less than 0, then it is considered as bad data
// it keeps count of bad data of the array, it increases bad data count by 1 each time it finds a bad data
// while looping over the array elements
// and finally after the loop end, it returns the count of total bad data of the input array

function findingBadData(numbersArray) {
    if (Array.isArray(numbersArray) === false) {
        return 'Please, Provide A Valid Array Input.';
    }
    let badDataCount = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

console.log(findingBadData([ -4, -9, -5, -33, -55 ]));


// Problem: 5
// gemsToDiamond function takes the number of gems first, second, and third friend have as 3 number input
// then it multiplies them with the per gems power of first, second and third friend respectively to get
// first, second and third friend's diamond number
// then their diamond's numbers are added to get total diamond number
// if total diamond number is greater than double of 1000, then it returns
// the number of diamond left after subtracting 2000 from total diamond number
// otherwise returns the total diamond number directly

function gemsToDiamond(firstFriendGemsQuantity, secondFriendGemsQuantity, thirdFriendGemsQuantity) {
    if (typeof firstFriendGemsQuantity !== 'number' || typeof secondFriendGemsQuantity !== 'number' ||
        typeof thirdFriendGemsQuantity !== 'number' || firstFriendGemsQuantity === undefined ||
        secondFriendGemsQuantity === undefined || thirdFriendGemsQuantity === undefined) {
        return 'Please, Provide Valid Number Input.';
    }
    const firstFriendPerGemsPower = 21;
    const secondFriendPerGemsPower = 32;
    const thirdFriendPerGemsPower = 43;
    const firstFriendDiamond = firstFriendPerGemsPower * firstFriendGemsQuantity;
    const secondFriendDiamond = secondFriendPerGemsPower * secondFriendGemsQuantity;
    const thirdFriendDiamond = thirdFriendPerGemsPower * thirdFriendGemsQuantity;
    let totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    // could have written 2000 instead of 1000 * 2
    if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}

console.log(gemsToDiamond(100, 5, 1));
