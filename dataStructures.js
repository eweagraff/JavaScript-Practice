//Maps

//Array
/* 
Methods that are specific for an array that allow you to loop over.
   1. forEach
   2. filter
   3. map

*/
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);


const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// MAP METHOD : This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})


//Map
//A map can feel similar to an object in JS however there are no prototypes and no inhertitating traits.
//Maps are useful for storing data.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);



//Set Data
// A set is a collection of unique valules.
//To build a new set you use the set constructor. 

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

//can easily filter for unique members