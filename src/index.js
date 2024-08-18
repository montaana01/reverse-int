module.exports = function reverse (n) {
    let toString = Math.abs(n).toString(); // get number without operators to string
    let array = toString.split('');
    let reverseArray = array.reverse(); //need get integer from array in next step!
    let reverseString = reverseArray.join(''); //get string from array
    return Number(reverseString); // get integer from string
}
