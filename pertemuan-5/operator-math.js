// * unary, binary, operand
let numberOne = 6;
let numberTwo = 8;
let resultMath = 4 + 5;
// * operand terbagi 2, operand kiri & operand kanan
// * operand tunggal
let numberTree = 6;

// * unary
let numberFour = -6;

// * binary
let numberFive = 6 + 3;

// ! Math
// * sisa bagi %
console.log(5 % 2);
console.log(15 % 3);
console.log(5 % 3);

// * eksponensial (pangkat)
console.log(3 ** 4); //3*3*3*3
console.log(5 ** 2);

// ! penambahan string dengan +
let name = "fulan";
let lastName = "iman";
let age = 20;

console.log("My name" + " Aiman");
console.log(name + lastName);

console.log(2 + "fulan");
console.log(2 + "2");
console.log("fulan" + 2);
console.log("2" + 2);
console.log(5 + 2);
console.log("6" + "9");
console.log(6 + 6 + "2");
console.log("6" + 6 + 2);
console.log(6 + "6" + 2);

console.log(4 - 2);
console.log(4 + "2");
console.log(4 - "2");
console.log("2" - 2);
console.log("2" + 2);
console.log(2 + "2");
console.log(2 - "2");
console.log("12" - 2);
console.log(12 + "2");
console.log("10" - 2);
console.log("10" * 2);
console.log(10 * "2" + 4 - 3);
console.log("10" * 2 + "4" - 3);
console.log("10" * "2" - "6" + "3");

// ! Konversi angka, unary +
console.log(+"10" + +"2");
console.log(+"10" + +false + "4");
console.log(+"10" + +"10" - "4");
console.log("10" + +"1" - "4");
console.log("10" + +"1" * "2");
console.log(+"10" - +true * "1");
console.log(+"10" + +"1");

// ! Presedensi operator
console.log(2 + 5 * 2);
console.log((2 + 5) * 2);

// ! Assignment
let a = 4;
let b = a;
let c = b;
console.log(a + c);

let d = c + a;
console.log(d);
 
let e = 3
let f = 6
let g = (e = f + e) - 4;
console.log(g);

// * assignment berantai / chaining assignment
let h = 4, i = 5;

let j;
j = 6;

let k, l, m, n;
k = l = m = n = 7;
n = m = l = k;

console.log(k);
console.log(l);

let o = 6;
o = o + 3;
o = o * 2;
console.log(o);

let p = 6;
p += 3;
p *= 2;
console.log(p);

// ! increment & decrement
let r = 6;
r ++; //r=r+1
console.log(r);

let s = 6;
s--;
console.log(s);

let t = 3;
s--;
s++;
console.log(s);

t = 2;
t *= 5 + 5; //? t = t * (5 + 5); 
console.log(t);

// ! typeof
let isOpen = true;
let isN = 3452n;
let myVar ;
let myVar2 = null;
console.log(t);
console.log(typeof t);
console.log(typeof name);
console.log(typeof isOpen);
console.log(typeof isN);
console.log(typeof myVar);
console.log(typeof myVar2);
















