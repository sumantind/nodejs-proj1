//Memoization in Javascript
/**
 * Memoization is an optimization technique that makes applications more efficient and hence faster
 * It store function result in cache and return if same function getting call again and again
 * It should used with function which take more time and memory in execution
 * this file is imported in html/index.html
*/
const cache = {};
function calculation(a,b) {
    console.log("");
    let res = (a+b)*(a+b);
    console.log("Calculation function called and result is : "+res);
    return res;
}

function memory(a,b){
    const key = a+":"+b;
    if(!cache[key]){
        const result = calculation(a,b);
        cache[key] = result;
        return result;
    }else{
        console.log("result from cache : "+cache[key]);
        return cache[key];
    }
}

