var colors = ["Red", "Green", "Blue"]; 
// var colors1 = new Array("Red", "Green", "Blue");
console.log(colors);
document.write(colors.length);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
console.log(fruits);
console.log(fLen);

let text = "<ul>";
console.log(text);
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
const number = prompt();
if(number>0){
  console.log("the number is positive")
};
console.log("the if statement is easy");
var colors = ["Red", "Green", "Blue"]; 
// colors.push("Yellow"); 
colors.unshift("Yellow");
// console.log(tt);
// console.log(tt1);
// document.write(tt)
// document.write(tt1)
document.getElementById("demo1").innerHTML = colors;
document.getElementById("demo1").innerHTML = colors;
document.write(colors.join()); // Prints: Red,Green,Blue
// var animals = colors.concat(wilds);
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2); 
document.getElementById("demo3").innerHTML = children;
let text1 = "Hello world, welcome to the universe.";
let result1 = text1.indexOf("welcome");

document.getElementById("demo4").innerHTML = result1;
console.log(result1);
var fruit1 = ["apple","banana","orange","pear","louster"];
var green1 = fruit1.sort();
console.log(green1);
function myFunction() {
  alert("Hello! I am an alert box!");
};

var number02 = [5,60,15,50,25,30,35,40];
number02.sort(function(a,b){
  return a - b;
});
console.log(number02);
fruit1.sort(function(a,b){
  return a- b ;
});
console.log(fruit1);

var i = 1;
while(i<=5){
  document.write("<p> the number is" + i + "</p>");i++;
};
var iii = 1;
do {
  document.write("<p> the number is" + iii + "</p>");iii++;
}
while(iii<=5);

var ii = 1;
for(var ii=1; ii<=5; ii++){
  document.write(ii);
};

var iiii = 1;
for(var i in fruit1){
  document.write(fruits[i]);
};
const cars = ["BMW", "Volvo", "Mini"];
let text12 = "";
for (let x of cars) {
  text12 += x + "<br>";
}

document.getElementById("demo6").innerHTML = text12;

let text13 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text13 += "The number is " + i + "<br>";
}

document.getElementById("demo7").innerHTML = text13;
let text131 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text131 += "The number is " + i + "<br>";
}

document.getElementById("demo7").innerHTML = text131;
let x = myFunction(4, 3);
document.getElementById("demo9").innerHTML = x;

function myFunction(a, b) {
  return a * b;
};
const person = {
  name:'John',
  greet: function(){
    console.log('hello');
  }
};
person.name;
person.greet();

