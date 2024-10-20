const dynamicText = document.querySelector('.dynamic-text');
const cursor = document.querySelector('.cursor');

// Array of phrases to cycle through
const phrases = [
    "Gamers Become Creators",
    "Passion Drives Performance",
    "Technology Fuels Creativity",
    "Code Meets Competition",
    "Ideas Become Reality",
    "Skills Meet Strategy",
    "Innovation Meets Entertainment",
    "Learning Never Stops",
    "Players Level Up Together",
    "Imagination Knows No Limits"
];

let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let currentPhrase = "";
const typingSpeed = 100; 
const delayBetweenPhrases = 2000; 


function typeLetter() {
    if (currentLetterIndex < currentPhrase.length) {
        dynamicText.textContent += currentPhrase[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(typeLetter, typingSpeed);
    } else {
        
        setTimeout(clearText, delayBetweenPhrases);
    }
}


function clearText() {
    dynamicText.textContent = "";
    currentLetterIndex = 0;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; 
    currentPhrase = phrases[currentPhraseIndex];
    setTimeout(typeLetter, typingSpeed); 
}
typeLetter();

const gallery = document.querySelector('.event-gallery');

gallery.addEventListener('mouseover', () => {
    gallery.style.animationPlayState = 'paused'; 
});

gallery.addEventListener('mouseout', () => {
    gallery.style.animationPlayState = 'running'; 
});
