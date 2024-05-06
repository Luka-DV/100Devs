//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

/* function savageSays(num) {

    for(let i = 1; i <= num; i++) {
        console.log("21");
        document.querySelector("#savageSays").innerText += ` ${num}`;
    }
}

savageSays(21); */


function savageSays(num) {

    for(let i = 1; i <= num; i++) {
        console.log(num);

        const newElement = document.createElement("h2");
        newElement.innerText = `${num}`;
        document.body.appendChild(newElement);
    }
}

savageSays(8);

