if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
};
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo1").innerHTML = greeting;
const time = new Date().getHours();
let greeting1;
if (time < 10) {
  greeting1 = "Good morning";
} else if (time < 20) {
  greeting1 = "Good day";
} else {
  greeting1 = "Good evening";
}
document.getElementById("demo2").innerHTML = greeting;
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
};
document.getElementById("demo3").innerHTML = "Today is " + day;
console.log(day);
console.log(greeting);
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo4").innerHTML = text;
console.log(text);
var d = new Date();
switch(d.getDay()) {
    case 0:
        alert("today is Sunday.");
        break;
    case 1:
        alert("Today is Mondy.")
        break;
    default:
        alert("No information");
        break;
};
document.getElementById("demo5").innerHTML = d;
console.log(d);