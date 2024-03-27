// most frequently asked

let name = {
    firstname : "Sayan",
    lastname: "Raha",
}

let printName = function(hometown,state,country){
    console.log(this.firstname + " " + this.lastname + " " + hometown + " "+ state + " " + country);
}

// Traditional bind method

let printMyName = printName.bind(name);
// printMyName();


// Now custom bind method it will work exactly like the custom bind method.

// NOTE : every function in javascript has access to this traditional "bind" method, so we need to make the custom "mybind" method accessible to all functions, so how can we do that??? The way to do that is put the mybind() inside Function.prototype - if we keep any function inside Function.prototype it has access to all the methods

Function.prototype.mybind = function(...args){
    // this -> printName; printName method can be accessed using the this keyword
    let obj = this;
    params = args.slice(1); // extracting the parameters from args by using slice method, the slice method will remove the first element from the list and will return us all the later elements, so it means args[0] was referencing to name. Also the params are in the array format so we cannot use call ,hence use apply method.
    return function (...args2){
      obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName2 = printName.mybind(name,"Kolkata");
printMyName2("West Bengal","India"); // Passing more than one parameters


// Problem -> suppose we want to pass parameters also in our custom bind method how can we acheive it? If we simply pass the arguments it will result in "undefined", so we need to handle the arguments as well.
