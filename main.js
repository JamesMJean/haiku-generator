/* 
This is the main file for the "pseudo"-haiku generator.
*/

const getRandomString = strArray => {
    return strArray[Math.floor(Math.random() * strArray.length)];
};

let firstFive = ['ff1', 'ff2', 'ff3', 'ff4', 'ff5'];
let middleSeven = ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'];
let lastFive = ['lf1', 'lf2', 'lf3', 'lf4', 'lf5'];

console.log(`${getRandomString(firstFive)}, ${getRandomString(middleSeven)}, ${getRandomString(lastFive)}.`);