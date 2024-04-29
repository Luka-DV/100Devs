//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


/* if( age < 16) {
    return "You cant drive.";
} else if(age < 18) {
    return "You can't hate from outside the club, because you can't even get in.";
} else if(age < 21) {
    return "You cant drink.";
} else if(age < 25) {
    return "You cant rent cars affordably.";
} else if(age < 30) {
    return "You cant rent fancy cars affordably.";
} else {
    return "You can do this."
} */

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


const header1 = document.querySelector("h1");

header1.addEventListener("click", checkAge);

function checkAge() {

    const age = Number(document.querySelector("#danceDanceRevolution").value);

    const message = (() => {
        if( age < 16) {
            return "You cant drive.";
        } else if(age < 18) {
            return "You can't hate from outside the club, because you can't even get in.";
        } else if(age < 21) {
            return "You cant drink.";
        } else if(age < 25) {
            return "You cant rent cars affordably.";
        } else if(age < 30) {
            return "You cant rent fancy cars affordably.";
        } else {
            return "You can do this."
        }
    })();

    document.querySelector("p").innerText = message;

}
