function myFunction() {
    alert ('Hello');
}

myFunction();

(function(){
    alert('Hello')
});
/*
//creating a function that runs code when user types into a text box
function logKey(event) {
    console.log(`You Pressed" ${event.key}".`);
}

textBox.addEventListener("keydown", logkey);
*/
/* instead of defing a separate logkey(), you can pass an anonymous function into addEventListener()

textBox.addEventListener("keydown", function (event){
console.log(`You pressed "${event.key}".`);
});

can also write the above with an arrow function instead of function(event)
textBox.addEventListener("keydown", (event) =>{ //can omit () around event if only one parameter
    console.log(`You pressed "${event.key}".`);
    });
*/

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) =>{
    output.textContent = `You pressed "${event.key}".`;
});



//top assignments
function add7(number){
    return number + 7
};


console.log(add7(10));