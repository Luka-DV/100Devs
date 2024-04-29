//--- Easy
//create a variable and assign it a number

let num = 3;

//minus 10 from that number

num -= 10;

//print that number to the console

console.log(num);

//--- Medium
//create a variable that holds a value from the input

//let numInput = Number(document.querySelector("#danceDanceRevolution").value);

//add 25 to that number

//numInput += 25;

//alert that number

//alert(numInput);

//--- Hard
//create a variable that holds the h1

const header = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables

header.addEventListener("click", showSum);

function showSum() {

    let numInput = Number(document.querySelector("#danceDanceRevolution").value);

    numInput += 25;

    const sumOfNums = num + numInput;

    console.log(sumOfNums);

}

