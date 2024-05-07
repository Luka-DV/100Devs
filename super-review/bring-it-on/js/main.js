// *Variables*
// Create a variable and console log the value

const someString = "hello";
console.log(someString);

// Create a variable, add 10 to it, and alert the value

let someNum = 4;
someNum += 10;
alert(someNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractNums(n1, n2, n3, n4) {
    const difference = n1 - n2 - n3 - n4;
    alert(difference);
}

subtractNums(99, 50, 20, 5);

// Create a function that divides one number by another and returns the remainder

function divideNums(num1, num2) {
    const remainder = num1/num2;
    return remainder;
}

console.log(divideNums(100, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoJumanji(num1, num2) {
    const sum = num1 + num2;
    if(sum > 50) alert("Jumanji");

}

addTwoJumanji(23, 1);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multuplyTheeNumsZebra(num1, num2, num3) {
    const product = num1 * num2 * num3;
    if(product % 3 === 0) alert("ZEBRA");
}

multuplyTheeNumsZebra(1, 10, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordNTimes(word, n) {

    if(typeof word !== "string") {

        throw new Error(`The input was not a word(string), but a/an ${typeof word}.`);
    }

    for(let i = 1; i <= n; i++) {
        console.log(word);
    }
}

logWordNTimes("juicy", 6);


