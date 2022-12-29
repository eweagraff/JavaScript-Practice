//Group data and object based.

var purchase1 ={
    shoes: 100,
    stateTax: 1.5,
    totalPrice: function () {
       var calculation = this.shoes *  this.stateTax;
       console.log('Total Price:', calculation)
    }
}

var purchase2 ={
    shoes:55,
    stateTax: 2.0,
    totalPrice: function () {
        var calculation = this.shoes *  this.stateTax;
        console.log('Total Price:', calculation)
     }
}

purchase1.totalPrice();
purchase2.totalPrice();

//this keyword essentially means "this object"

