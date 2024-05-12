//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const urlString = data.message;
        let dogBreed = urlString.split("/")[4];

        if(dogBreed.includes("-")) {
            dogBreed = dogBreed.split("-").reverse()
            .map(word => word = word[0].toUpperCase() + word.slice(1))
            .join(" ");
        } else {
            dogBreed = dogBreed[0].toUpperCase() + dogBreed.slice(1);
        }

        document.querySelector("img").src = data.message;
        document.querySelector("img").alt = `Photo of the dog breed ${dogBreed}.`
        document.querySelector("h2").innerText = dogBreed;

    })
    .catch(error => {
        console.log(error)
    })



class MyClass {
   #privateField; // Private field >> or just #privateField = "value"
    
    //if you want that every instance has its own value:
    constructor(value) {
       this.#privateField = value; // Initialize private field
    }
    
    //...če imaš v constructorju privateField moraš vseeno declerat privateField na samem class-u!
    
    // Getter method for private field:

    get field() {
        return this.#privateField;
    }

    set field(value) {
        this.#privateField = value;
    }
    }

const obj = new MyClass("Ball");
const wolf = new MyClass("Dog");
console.log(obj.field); // Output: "Ball"
console.log(wolf.field) // Output: "Dog"

obj.field = "cat";
console.log(obj.field); // Output: "cat"
console.log(wolf.field) // Output: "Dog"

// console.log(obj.#privateField); //error
// obj.#privateField = "some other value";  // Error: Private field '#privateField' must be declared in an enclosing class



