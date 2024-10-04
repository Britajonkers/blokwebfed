// JavaScript Document
console.log("hi");


const button = document.getElementById('interactieButton');

button.addEventListener('click', function() {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 400);
});








