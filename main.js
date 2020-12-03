/* 
This is the main file for the "pseudo"-haiku generator.
*/

const getRandomString = strArray => {
    return strArray[Math.floor(Math.random() * strArray.length)];
};

const createHaiku = array => {
    let haiku = '';
    for (let i = 0; i < array.length; i++) {
        haiku += getRandomString(array[i]) + '\n';
    };
    return haiku;
}


let firstFive = ['Tired of wasting time', 'Canvas is still blank', 'How shall I begin?', 'Start the day early,', 'Slowly getting this,'];
let middleSeven = ['Longing to be productive', 'Past the rivers and mountains', 'Discard that which is useless', 'So many places to see', 'If we can travel again'];
let lastFive = ['How much time is left?', 'The light is turned off.', 'I should get a cat.', 'Won\'t teach forever.', 'So much more to learn.'];
let lineArray = [firstFive, middleSeven, lastFive];

console.log(createHaiku(lineArray));


/*
console.log(getRandomString(firstFive));
console.log(getRandomString(middleSeven));
console.log(getRandomString(lastFive));
*/