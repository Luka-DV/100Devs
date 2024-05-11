//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function MakeStreetFighterChar(name, mainAtt, secondAtt, block) {

    this.name = name;
    this.mainAttack = mainAtt;
    this.secondaryAttack = secondAtt;
    this.blockStrength = block;

    this.heavyAttack = function() {
        console.log(`${this.name} uses their heavy attack "${this.mainAttack}"!`)
    };

    this.lightAttack = function() {
        console.log(`${this.name} uses their light attack "${this.secondaryAttack}"!`)
    };

    this.block = function() {
        console.log(`${this.name} blocks the attack for ${this.blockStrength} dmg!`);
    }

}

const ryu = new MakeStreetFighterChar("RYU", "Nutcracker", "Slap", 11);

console.log(ryu);



function Pizza(dough, sauce, slices, ...toppings) {
    this.dough = dough;
    this.sauce = sauce;
    this.numberOfSlices = slices;
    if(toppings.length === 1) {
        this.toppings = toppings[0];
    } else {
        this.toppings = toppings;
    }
    

    this.eatPizza = function(numberOfSlices) {
        if(this.numberOfSlices > 0) {
            let pizzaSlicesLeft = this.numberOfSlices;
            this.numberOfSlices -= numberOfSlices;
            if(this.numberOfSlices <= 0) {
                this.numberOfSlices = 0;
                return `You ate ${pizzaSlicesLeft} pizza slices, there are no more slices left!`
            }
        } else {
            return "There are no more slices left!"
        }
        return `You ate ${numberOfSlices} pizza slices`
    }

    this.burn = function() {
        return "AUCH!!"
    }

    this.addTopping = function(newTopping) {
        if(typeof this.toppings === "string") {
            this.toppings = new Array(this.toppings);
        }
        this.toppings.push(newTopping);
        return `Your pizza has now the following toppings: ${this.toppings.slice(0,this.toppings.length -1).join(", ")} and ${this.toppings.slice(this.toppings.length -1)}.`
    }
}

Pizza.prototype.getDoughType = function() {
    return `This pizza has ${this.dough} dough.`
}

const margarita = new Pizza("white", "spicy tomato", 8, "cheese", "peppers", "tomato sauce"); // <<< works, returns an array!)
const veggie = new Pizza("dark", "tomato", 12, "mushrooms");

console.log(margarita);
console.log(veggie);

