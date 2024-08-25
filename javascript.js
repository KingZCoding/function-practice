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
    return number + 7;
}


console.log(add7(10))


function multiply(number1, number2){
    return number1 * number2;
}

console.log(multiply(10, 6))

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

console.log(capitalize("nADIA"))
console.log(capitalize("aiden"))
console.log(capitalize("CARSEN"))

function lastLetter (word) {
    return word[word.length - 1];
}

console.log(lastLetter("Aiden"))
console.log(lastLetter("Carsen"))

//practicing functions on my own
function firstLetter(word) {
    return word[0];
}

console.log(firstLetter("Aiden"))
console.log(firstLetter("Carsen"))

function cap (str){
    return str.toUpperCase();
}

console.log(cap("aiden"))
console.log(cap("cASREN"))
console.log(cap("Nadia"))

function mult(number3, number4){
    return number3 * number4;
}

console.log(mult(57, 12))

function divide(number5, number6){
    return number5 / number6;
}

console.log(divide(34, 2))

function lower(str){
    return str.toLowerCase();
}

console.log(lower("AIDEN"))
console.log(lower("CaRsEn"))
console.log(lower("naDIA"))
