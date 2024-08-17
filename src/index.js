module.exports = function reverse (n) {
    let toString = n.toString();
    let array = toString.split('');
    let reverseArray = array.reverse(); //need get integer from array in next step!
    return reverseArray;
}
