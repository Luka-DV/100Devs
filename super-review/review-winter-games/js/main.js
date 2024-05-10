//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function returnEvenNumsFromArray(array) {

    const evenNumsArray = new Array();

  /*   for(let num of array) {
        if(num % 2 === 0) {
            evenNumsArray.push(num);
        }
    } */

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNumsArray.push(array[i]);
        }
    }

    return evenNumsArray;
}

const returnEvenArr = function(arr) {
    return arr.filter(num => num % 2 === 0);
}

const evenArr = arr.filter(num => num % 2 === 0);

function returnEvenNums(arr) {
    return arr.reduce((acc, crr) => {
        if(crr % 2 === 0) {
            acc.push(crr);
        }
        return acc;
    }, []);
}

console.log("Filter const", evenArr);
console.log("For loops", returnEvenNumsFromArray(arr));
console.log("Filter func", returnEvenArr(arr));
console.log("reduce func", returnEvenNums(arr));

let arrp = arr.map( num => num % 2 === 0);
console.log(arrp)


const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
  const productsWithPrice = products.map((product) => {
    return { ...product, price: 100 };
  });

  console.log(products)
  console.log(productsWithPrice)
  
