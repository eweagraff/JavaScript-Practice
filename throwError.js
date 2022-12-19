try {
    console.log(a+b)
} catch(err) {
    console.log('There was an error')
}

//catch block that the try block catches so your code will continue to run
// a+b is not defined so an error will produce
//benefit of try/catch it will not stop javascript execution.