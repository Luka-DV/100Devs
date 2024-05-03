//Write your pseduo code first! 

//need the value in Cels
//convert the value to Fahernheit
//return the value in F.


document.querySelector("button").addEventListener("click", convertTemp);

function convertTemp() {

    const tempInCels = Number(document.querySelector("#value").value);

    const tempInFahren = tempInCels * 1.8 + 32;

    document.querySelector("#temp").innerText = tempInFahren;
}