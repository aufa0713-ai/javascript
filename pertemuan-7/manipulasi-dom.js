let bebas = document.getElementById("myDiv");
console.log(bebas);
console.log(bebas.textContent);
console.dir(document);

let span = document.getElementById("mySpan");
console.log(span.textContent);

//* update value
bebas.textContent = "Hafidz";
console.log(bebas.textContent);

let text = document.getElementById("content");
text.textContent = 10;

// * menambahkan tag html
// ?buat element paragraph / <p>
let paragraphElement = document.createElement("p");

// ?menuliskan element paragraf di dalam div
paragraphElement.textContent = "paragraf baru";
document.getElementById("container").appendChild(paragraphElement);

// ! value
let number = document.getElementById('phone');
console.log(number.value);

// ! mengambil value input dari input user
let gender = document.getElementById('gender')
console.log(gender.value);
