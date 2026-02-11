/**
 * Map is similar to object but little bit advance from object
 * Map key can be any data type (Object can have string key only)
 * Map has more features which don't have in object
 * Map has better performance than object
*/

let obj = {
    name:'sumant',
    true:10, // this not accessible true read as string here
    23:'age' // cant access this property
};

let data = new Map([
    ['name','Peter'],
    [true,'this is bool key in map'],
    [23,'this a number key']
]);

console.log(obj); // upto here okay
console.log(data);

//console.log(obj.23); // give error
console.log(obj.true); // give output

console.log(data.get(23)); // give output
console.log(data.get(true)); // give output
console.log(data.keys()); // give output

data.set('country','India'); // add new data

data.set('name','Samual'); // change the name value

console.log(data.keys());

console.log(data);

console.log(data.values());

console.log(data.size);

//data.has('country'); // check

//data.delete(true); // delete property
 data.forEach((value,key)=>{
    console.log(key,value);
 });

console.log("--------------------");

 for(x of data){
    console.log(x);
    console.log(x[0]);
 }
