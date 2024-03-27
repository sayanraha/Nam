// Event Bubbling -> starts from the bottom level

// Here the event bubbling is happening by default, if you do-not pass a third argument in the eventListener function.The third argument is considered as false.


let cnt1 = 0,cnt2 = 0,cnt3 = 0;
document.querySelector("#grandparent").addEventListener('click',()=>{
    console.log("Grandparent Clicked" , cnt1++);
},false) // bubbling


document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("Parent Clicked" , cnt2++);
},false) // bubbling


document.querySelector("#child").addEventListener('click',(e)=>{
    console.log("Child Clicked" , cnt3++);
    e.stopPropagation()
},false) // bubbling





/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */




// Event Capturing(trickling) - starts from the top level




document.querySelector("#grandparent").addEventListener('click',(e)=>{
    console.log("Grandparent Clicked" , cnt1++);
   e.stopPropagation()
},true)// capturing


document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("Parent Clicked" , cnt2++);
    
},true)// capturing


document.querySelector("#child").addEventListener('click',()=>{
    console.log("Child Clicked" , cnt3++);
   
},true)// capturing


// To stop the bubbling or capturing we use the stoppropagation()



/*
    Event bubbling and capturing are both mechanisms used in the DOM event propagation model:

        Event Bubbling:

    ->  Mainly used when you want to handle an event at multiple levels of the DOM hierarchy.
    -> The event starts at the target element and bubbles up through its ancestors.
    -> Allows for concise and efficient event handling, especially when dealing with nested elements that share a common ancestor.


        Event Capturing:

    -> Less commonly used but offers the ability to intercept events at the outermost parent elements before they reach their target.
    -> The event starts at the top of the DOM hierarchy and trickles down through the nested elements.
    -> Useful for implementing certain types of event delegation or for capturing events at higher levels of the DOM hierarchy before they reach their intended targets.

*/