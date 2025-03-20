
// Declaring variables
const firstCard = document.querySelector('.card-1-container');
const secondCard = document.querySelector('.card-2-container');

// Creating event listeners
firstCard.addEventListener('click', turnCard);
secondCard.addEventListener('click', turnCard);

// Creating functions
function turnCard(e) {
    console.log('Element contains: ' + e.currentTarget.classList);
    e.currentTarget.classList.toggle("is-flipped");
}
// Test Alerts

// alert('test');