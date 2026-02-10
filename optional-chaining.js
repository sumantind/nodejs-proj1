// Optional Chaining
let student = {
    personalData:{
        name:'sumant',
        age:33,
        city:'Hyderabad'
    }
}

console.log(student.personalData.name); // here giving prper output
// when we try to access those property who is not defined it will give the error
console.log(student.personalData.id);
// so to handle this error we can put '?' at the end of the object.
console.log(student?.personalData?.id);

let other = {
    name:()=>{
        return 'Sumant Kumar';
    },
    friends:[{name:'Ram'},{name:'Shyam'}]
}

console.log(other.name());
//console.log(other.age()); // here this will give the error to handle this error put ?
console.log(other.age?.());

console.log(other.friends[0].name); 
//console.log(other.friendss[0].name); // here it will give error 
console.log(other.friendss?.[0]?.name); // now it will not give the error
