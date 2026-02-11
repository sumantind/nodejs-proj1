// Simple Function
function simpleFun() {
    console.log("Called simple function");
}
simpleFun();


/**
 * To make simple function to generator function put "*" sign 
 * with function `function*` or 
 * with function name `function *simpleGenerator()`
*/

// Generator function 
function* simpleGenerator() {
    console.log("Generator Function Called");
    let x = "First Step";
    yield x;
    yield 30;
    yield 40;
}

let sG = simpleGenerator();
console.log(sG.next().value); /*o/p : First Step*/
console.log(sG.next()); /* o/p : object {value : 30, done : false}*/
console.log(sG.next());
console.log(sG.next()); /* o/p : object {value : undefined, done : true}*/
console.clear();
function* NewIdGenerator() {
    console.log("New id generator function called");
    let i = 100;
    while(true){
        i++;
        yield i;
    }
}
let nIG = NewIdGenerator();
function getNewId() {
    // console.log(nIG.next());
    document.getElementById('newId').innerText = nIG.next().value;
}