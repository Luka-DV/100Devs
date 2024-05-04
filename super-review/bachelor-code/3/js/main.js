/* const contestants = document.querySelectorAll(".contestant");

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click){
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle("hidden");
	}else{
		alert("Wrong!");
	}
} */


//you dont need the Array.from() method anymore:

//"In modern browsers, NodeList objects support the forEach method, so there's no need to convert it to an array explicitly.""


const contestants = document.querySelectorAll(".contestant"); //gives a NodeList

console.log(contestants);
console.log(contestants.entries());
const entriesArray = Array.from(contestants);
console.log(("array", entriesArray));
console.log("keys", entriesArray.values())
console.log(entriesArray.entries());

contestants.forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click){
	console.log("click: ",click)
	console.log("click target: ", click.target)
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle("hidden");
	}else{
		alert("Wrong!");
	}
}

