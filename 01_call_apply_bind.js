let name1 = {
    firstname : "Sayan",
    lastname : "Raha",
    /* printFullName : function(){
        console.log(this.firstname + " "+ this.lastname);
        */
}
// name.printFullName();

let printFullName = function(hometown){
    console.log(this.firstname + " " + this.lastname + " " + hometown);
}

 printFullName.call(name1,"Kolkata");

let name2 = {
    firstname : "Sumit",
    lastname : "Sharma"
}
printFullName.call(name2,"Mumbai");

// name.printFullName.call(name2);

// function borrowing -> using call method

// The call() method calls a function with a given "this" value and arguments provided individually.

// Note :  if you invoke a function without any thisObj argument, then JavaScript considers this property to be a global object.



// Apply method -> similar to call method instead of individual parameters it takes parameters in array format

let name3 = {
    firstname : "Arun",
    lastname : "Kumar"
}

let info = function(phone,city,state){
    console.log(`${this.firstname} ${this.lastname} ${phone} ${city} ${state}`)
}

info.apply(name3,["+91 9871214537","Silchar","Assam"]);



// Bind method

let printMyname = printFullName.bind(name1,"Kolkata");
printMyname() // op-> Sayan Raha Kolkata