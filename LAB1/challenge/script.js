
// Mild Challenges 
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

const prompt = require("prompt-sync")();



// 1. If divided evenly, how much would each sibling get for the week?
let split = weeklyAllowance/3
console.log(split)
// 2. How many games can Jordan buy with their cut?
let games = Math.floor(split/game)
console.log(games)
// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game += 1
shoes /= 2

console.log(game)
console.log(shoes)
// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let combined = split*2
let combinedAll = combined * 4
let shoe = Math.floor(combinedAll/shoes)
console.log(shoe)
// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let gamesTogether = combined/game
let gamesAlone = split/game

let diff = Math.floor(gamesTogether-gamesAlone)
console.log(diff)
// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log( "the three siblings are " + sibling1 + " , " + sibling2 + " , and " + sibling3 )
// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(sibling3.length)

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase());
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase());
// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
const re = /a/gi;
console.log(sibling3.replace(re, ""))
// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(sibling3.substring(16, 26))
// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);
}

console.log(getRandomNum(10))
const greeting = (name) => {
    return `Hello ${name}, I'm glad you can make it!`;
}

console.log(greeting("desmond"))
const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}

console.log(perfectRoot(49))
// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    return x + y;
}
console.log(addNums(5, 5))
console.log(addNums(10, 5));
// uncomment the line below, to call the function, and add one more function call
console.log( addNums(4, 6) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if( name == "Beyonce") { 
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works
console.log(isBeyonce("Beyonce"))
console.log(isBeyonce("loser"));
console.log(isBeyonce("Desmond"))



/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if( x % 2 == 0){
        return x/2

    } else {
        return x;
    }
}
//Write your own function calls
console.log(reduceEvens(10))
console.log(reduceEvens(11));
console.log(reduceEvens(12));
// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {
if( string.length >= 10){
    return string.substring(0,11)
} else{
    return ""
}
}

console.log(shortenString("1234567891011"))

// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// Prompt the user for their budget and call the function.
/// If no burgers, fries, and sodas can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
if( budget >= 1){
    let burgers = Math.floor(budget / burger)
    return burgers
} else{
    return "sorry, no burgers for you."
}
}

console.log(buyBurgers(10))
// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Prompt the user for their budget and call the function.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
let meal = burger + fries + soda
let meals = Math.floor(budget / meal)
let remainder = budget % meal

if( budget >= 9){
    return "you can buy " + meals + " and you have $" + remainder + " left. "
} else {
    return "you can't buy any meals."
}
}
console.log(buyMeals(18))

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// Prompt the user for the two sides and call the function
/// The larger side should be the hypotenuse  

const missingLeg = (side1, side2) => {
    if ( side1 > side2){
      side1 = side1* side1
      side2 = side2 * side2
        let leg2 = Math.sqrt(side1-side2)
        return " the missing leg is " + leg2
    } else {
        side1 = side1 * side1;
        side2 = side2 * side2;
        leg2 = Math.sqrt(side2-side1)
        return " the missing leg is " + leg2;
        
    }
}
console.log(missingLeg(20, 18))
// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
// Prompt the user for a number and call the function