var dog = {
    has4Legs: true,
    isFurry: true
    
}

var cat = Object.create(dog)
console.log("cat:", cat)

//to inherit you have to pass in the prototype when creating the new object in order to inherit those properties.