var data = "Hello";

var data = "World";

console.log(data); // that means we can redeclare the variable make with var keyword

let data1 = "Jai Shree Ram";

console.log(data1); 
/**upto here no issue but when we try to redeclare 
 * the same variable with let keyword it will give the error
 */
//let data1 = "nnnn"; // give the error like ' Identifier 'data1' has already been declaredUnderstand this error'
if(true){
    let x= 10;
    console.log(x);
}
// upto here there no problem

//console.log(x); // give error 'x is not defined' because let is block scope

if(true){
    var y = 100;
    console.log(y);
}

console.log("Outside : "+y); // no error because var is function scope

function test(){
    var z = 789;
    console.log("Inside of test function : "+z);
}
test();

//console.log("outside of function test : "+z); // here give error ' z is not defined'

//Notes : 
/**
 * After execution of the code remove the data from variable with let in the block level scope
 * After execution of the code will not remove from variable with var in the block level scope
*/




