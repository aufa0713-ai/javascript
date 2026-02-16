1.
let find = document.getElementById("welcomeBox")
console.log(find.textContent);

find.textContent = "Belajar DOM itu menyenangkan";
console.log(find.textContent);

let span = document.getElementById("studentName")
console.log(span.textContent);

span.textContent = "Aufa";
console.log(span.textContent);

2.
let paragraphElement = document.createElement("p")

paragraphElement.textContent = "Saya sedang belajar createElement";
document.getElementById("noteArea").appendChild(paragraphElement);

3.
let number = document.getElementById('userGender')
console.log(number.value);

4.
let contactNumber = document.getElementById('contactNumber');
contactNumber.value = "08123456789";


