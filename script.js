// JavaScript Document
console.log("hi");


const button = document.getElementById('interactieButton');

button.addEventListener('click', function() {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 400);
});








// // Selecteer het "like" icoon en voeg een klik-event toe
// document.querySelector('[aria-label="like"]').addEventListener('click', function() {
//     // Voeg de "animate-shake" klasse toe aan het "like" icoon wanneer erop wordt geklikt
//     this.classList.add('animate-shake');
//   });
  

ocument.addEventListener('DOMContentLoaded', function () {
    // Selecteer het "like" icoon
    var likeButton = document.querySelector('section[aria-label="info"] [aria-label="buttons"] [aria-label="like"]');

    // Controleer of het "like" icoon is gevonden
    if (likeButton) {
        // Voeg een klik-event toe aan het "like" icoon
        likeButton.addEventListener('click', function() {
            // Voeg de animatieklasse toe aan het "like" icoon
            this.classList.add('animate-shake');
        });
    } else {
        console.error('Het like-icoon is niet gevonden!');
    }
});

// bron https://chatgpt.com/share/66ff10ee-0a68-800b-8e47-bf7e5d088d82