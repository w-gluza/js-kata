`use strict`;

// when the page loads, an element (div?) slides up/in containing the cookie notification

const cookie = document.querySelector(`#notification`);
const btn = document.querySelector(`#btn`);

function loadPage(){
   cookie.style.transform = `translate(800px, 100px)`;
};

window.onload = loadPage;

// When a button is pressed, it slides back out

btn.addEventListener(`click`, function(){
   cookie.style.transform = `translate(1500px, 100px)`;
});

