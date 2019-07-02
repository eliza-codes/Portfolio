// here is a variable where we can store the value of the counter
let value = 0

// set the header to the initial value
document.querySelector('#value').innerHTML = value.toString();
var p1 = 1
var p2 = 2

// 1. add a handler for the `subtract` button
document.getElementById("subtract").addEventListener("click", function(){
myFunction(p1, p2);

});

function myFunction(value,b){
var result = (value - b);
document.getElementById("value").innerHTML = result;
}

// 2. add a handler for the `add` button

// 3. "DRY" your code out by making a function