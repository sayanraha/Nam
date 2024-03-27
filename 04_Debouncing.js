/*
    Debouncing in JavaScript is a technique used to ensure that a function is not repeatedly called too often, especially in response to frequent events like scrolling or typing. 

    Imagine you have a function that gets called every time a user scrolls down a webpage. If the function is heavy and takes some time to execute, calling it too frequently can slow down the performance of your webpage. Debouncing solves this by ensuring that the function is only called after a certain period of time has passed since the last time it was invoked.

    Here's how it works in simple terms:

    1. When the event (like scrolling or typing) occurs, a timer is set.
    2. If the event happens again before the timer runs out, the timer is reset.
    3. The function is only called when the timer completes without another occurrence of the event.

    This way, you can control the frequency of function calls and optimize performance, especially for tasks like autosaving forms or updating UI elements.

 */
let counter = 0;
const getData  = ()=>{
    // calls an API and gets data
    console.log("Fetching Data......",counter++);
}
// we can see in the console that with every keystroke in the search bar there is an API calling , we need to fix this issue. 


const debounce = function(fn,delay){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer); // if user types something before the timeout the previous timer gets deleted.
         timer = setTimeout(()=>{
            getData.apply(context,args);
        },delay);
    }
}


const betterFunction = debounce(getData,300);


// the betterFunction() will be called everytime each and every keystroke is pressed and it will return us a copy of the inner function present inside debounce function, which will start a timer of a delay of 300 millisecond and then call the getData() if we don't clear the timeout before it is called.


// The debounce() takes 2 args a function and a delay and does-not allow the function to make unnecessary calls and will only make a call if the diff-btw the timeout of the 2 keystrokes is >= delay i.e 300 ms.