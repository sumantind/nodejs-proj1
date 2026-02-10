const data = [
    {id:1,name:'sumant',age:20},
    {id:2,name:'Raushan',age:23},
    {id:3,name:'Amit',age:34},
    {id:4,name:'sumit',age:11},
    {id:5,name:'Amrita',age:24},
    {id:6,name:'Aadit',age:54},
];
const res1 = data.find((item)=>item.age>11); // return first matching record
const res11 = data.findIndex((item)=>item.age>11); // return index of first matching record
const res2 = data.findLast((item)=>item.age>11); // return last matching record
const res22 = data.findLastIndex((item)=>item.age>11); // return index of last matching record
console.log(res1);
console.log(res11);
console.log(res2);
console.log(res22);