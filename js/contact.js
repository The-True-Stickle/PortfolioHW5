let email = document.getElementById("email");
let emailResponse = document.getElementById("email-response");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        let response = 'Not a valid email!';
        emailResponse.innerHTML = response;
        console.log("Hi");
    }
    else {
        emailResponse.innerHTML = "";
        console.log("hello");
    }
});

console.log("hi");

let name = document.getElementById("name");
let nameResponse = document.getElementById("name-response");
name.addEventListener("input", (event) => {
    if (event.target.value.length < 2 || event.target.value.length > 20) {
        let response = 'Not a valid name!';
        nameResponse.innerHTML = response;
        console.log("Hi");
    }
    else {
        nameResponse.innerHTML = "hi";
        console.log("hello");
    }
});

fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))