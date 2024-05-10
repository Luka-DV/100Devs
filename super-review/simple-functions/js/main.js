//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractTwoNumsAndAlertTheDiff(num1, num2) {
    const result = num1 - num2;
    alert(result);
}

subtractTwoNumsAndAlertTheDiff(27, 7);

//create a function that divides three numbers and console logs the quotient

function divideThreeNums(num1, num2, num3) {
    const quotient = num1/num2/num3;
    console.log(quotient);
}

divideThreeNums(10, 5, 2);

//create a function that multiplys three numbers and returns the product

function multiplyThreeNums(num1, num2, num3) {
    const product = num1*num2*num3;
    return product;
}

console.log(multiplyThreeNums(5, 10, 2));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(num1, num2, num3) {
    const sum = num1 + num2;
    const quotient = sum % num3;
    return quotient;
}

console.log("Medium: ", addTwoAndDivide(10, 20, 7));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function mathProblem1(num1, num2, num3, num4) {

    const productOfNum1And2 = num1 * num2;
    let result;

    if(productOfNum1And2 > 100) {
        result = productOfNum1And2 + num3 + num4;
        console.log(result);
    } else if(productOfNum1And2 < 100) {
        result = productOfNum1And2 - (num3 - num4);
        console.log(result);
    } else {
        result = (num1 * num2 * num3) % num4;
        alert(result)
    }
}


mathProblem1(5,10,3,7);