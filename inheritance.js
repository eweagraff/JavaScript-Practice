var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var parrot1 = Object.create(bird)
console.log("parrot1", parrot1);
console.log("parrot1 has wings:", parrot1.hasWings)

parrot1 = {
   hasWings: true,
   canFly: true,
   hasFeathers: false
}

console.log(parrot1)



//inheritance of object properties can happen when you set a prototype that multiple objects 
// can inherit those properties. 

