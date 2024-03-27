// currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.

// Function currying using Bind Method
let multiply = function(x,y){
    console.log(x * y);
}

let multiplyBytwo = multiply.bind(this,2);
multiplyBytwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);



// // Function currying using Closures

let add = function(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
let res = add(10)(15)(20);
console.log(res);