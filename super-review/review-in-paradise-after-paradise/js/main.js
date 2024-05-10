// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function checkArray(arr) {

    if(arr[0] < arr[arr.length -1]) {
        alert("Hi");
    } else if(arr[0] > arr.at(-1)) {
        alert("Bye")
    } else alert("We close in an hour")
}

//checkArray([140,1,22])


const arr = new Array(1, 2, 3, 4, 5, 66, 7);
console.log(arr);

const findBiggestNum = arr => {

    //let biggestNum = -Infinity;

   /*  for(let num of arr ) {
        if(num > biggestNum) {
            biggestNum = num;
        }
    } */

   /*  arr.forEach(num => {
        if(num > biggestNum) {
            biggestNum = num;
        }
    }) */

  /*   const biggestNum = arr.reduce((acc, crr) => {
        if(crr > acc) {
            acc = crr;
        }
        return acc;
    }, -Infinity) */


    const biggestNum = Math.max(...arr);


    console.log(biggestNum);
}

findBiggestNum(arr);

let cars = ['Honda', 'Toyota', 'Ford', 'Tesla']
const nums = [1,2,3]
cars = nums
nums[0] = 99;
console.log( cars ) //[99,2,3]