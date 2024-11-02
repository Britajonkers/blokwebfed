// JavaScript Document
console.log("hi");


const button = document.querySelector('#interactieButton');

button.addEventListener('click', function() {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 400);
});


