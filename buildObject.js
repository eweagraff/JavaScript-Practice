class Person {
    constructor(name, age, energy) {
        this.name = "tom"
        this.age = 20
        this.energy = 100
    }
    sleep() {
        this.energy

    }
    doSomethingFun() {
        this.energy
    }
}

// Task 2: Code a Worker class
class Worker extends Person {

    constructor(xp, hourlyWage) {
        this.xp = 0
        this.hourlyWage = 10
    }
    goToWork() {
        return this.xp += 10;
    }
}



// Task 3: Code an intern object, run methods
function intern() {
    var newIntern = new Worker('Bob', 21, 110, 0, 10)
    
    newIntern.goToWork()
    return newIntern;
}


// Task 4: Code a manager object, methods
function manager() {
   

var newManager = new Worker('Alice', 30, 120, 100, 30);    

newManager.doSomethingFun()   

    return newManager;

} 





intern()
manager ()
