
let c1 = 100;
let c2 = 10;
let dd1 = 'apple';
let dd2 = 'orange';
let Arithmetic1 = c1 + c2;
console.log(Arithmetic1);
document.getElementById('Arithmetic11').innerHTML = Arithmetic1;
let Arithmetic2 = c1 - c2;
document.getElementById('Arithmetic21').innerHTML = Arithmetic2;
console.log(Arithmetic2)
let Arithmetic3 = c1 * c2;
document.getElementById('Arithmetic31').innerHTML = Arithmetic3;

console.log(Arithmetic3)
let Arithmetic4 = c1 / c2;
document.getElementById('Arithmetic41').innerHTML = Arithmetic4;

console.log(Arithmetic4)
let Arithmetic5 = c1 % c2;
document.getElementById('Arithmetic51').innerHTML = Arithmetic5;
console.log(Arithmetic5)


c1 += 20;
document.getElementById('Assignment1').innerHTML ='value of c1 is:' + c1;
console.log(+ c1);
dd1 += 'banana';
document.getElementById('Assignment2').innerHTML ='value of c1 is:' + dd1;
console.log(+ c1);