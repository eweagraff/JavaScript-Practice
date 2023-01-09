// For in statements iterate over enumerable string properties of an object, 
// including any inherited properties

//For of - executes a loop that operates on a sequence of values sourced from an interable object. 
//Iterable objects include:
// array, string, typedarray


// Task 1
function logDairy () {
    var dairy = [
        'cheese', 'sour cream', 'milk',
        'yogurt', 'ice cream', 'milkshake'
    ]
    for (element of dairy) {
        console.log(element)
    }
}

logDairy()
// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
       console.log(key + ":" + bird[key])
    }
    
}
birdCan()
// task 3
function animalCan() {
    for (key in bird) {
        console.log (key + ":" + bird[key])
    }
}

animalCan ()



