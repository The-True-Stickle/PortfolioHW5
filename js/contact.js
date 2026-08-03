let errorArray = '';

let email = document.getElementById("email");
let emailResponse = document.getElementById("email-response");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        let response = 'Not a valid email!';
        emailResponse.innerHTML = response;
        let jsonString = '{[{"name": "email"}, {"type": "typeMismatch"}, {timestamp, "' + Date.now().toString() + '" }]}';
        //If I had more time I'd add this string to an array here
    }
    else {
        emailResponse.innerHTML = "";
    }
});


let name = document.getElementById("name");
let nameResponse = document.getElementById("name-response");
name.addEventListener("input", (event) => {
    if (event.target.value.length < 2 || event.target.value.length > 20) {
        let response = 'Not a valid name!';
        nameResponse.innerHTML = response;
        let jsonString = '{[{"name": "name"}, {"type": "wrong length"}, {timestamp, "' + Date.now().toString() + '" }]}';
        //If I had more time I'd add this string to an array here
    }
    else {
        nameResponse.innerHTML = "";
    }
});

let message = document.getElementById("message");
let messageResponse = document.getElementById("message-response");
message.addEventListener("input", (event) => {
    if (event.target.value.length < 2 || event.target.value.length > 1000) {
        let response = 'Not a valid message!';
        messageResponse.innerHTML = response;
        let jsonString = '{[{"name": "message"}, {"type": "wrong length"}, {timestamp, "' + Date.now().toString() + '" }]}';
        //If I had more time I'd add this string to an array here
    }
    else {
        messageResponse.innerHTML = "";
    }
});

fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))