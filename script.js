// JavaScript Document
console.log("hi");


const button = document.getElementById('interactieButton');

button.addEventListener('click', function() {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 400);
});








    // const likeButton = document.getElementById('likeButton');
    
    // likeButton.addEventListener('click', function() {
    //     if (likeButton.src.includes('like.svg')) {
    //         likeButton.src = 'images/geliked.svg';
    //     } else {
    //         likeButton.src = 'images/like.svg';
    //     }
    // });

    const likeButton = document.getElementById('likeButton');
        
        // Voeg een klikgebeurtenis toe aan de like-knop
        likeButton.addEventListener('click', function() {
            // Controleer of de huidige afbeelding 'like.svg' is
            if (likeButton.src.endsWith('like.svg')) {
                // Verander naar de 'geliked' SVG
                likeButton.src = 'geliked.svg';
            } else {
                // Verander terug naar de 'like' SVG
                likeButton.src = 'like.svg';
            }
        });