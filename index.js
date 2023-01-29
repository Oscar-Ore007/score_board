let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


//create a counter for both home and guest scores

let homePoints = 0 
let guestPoints = 0 


//home score counter 
function onepointHome() {
    homePoints += 1 
    homeScore.textContent = homePoints 
}

function twopointHome() {
    homePoints += 2
    homeScore.textContent = homePoints 
}

function threepointHome() {
    homePoints += 3
    homeScore.textContent = homePoints 
}

//guest score counter 

function onepointGuest() {
    guestPoints += 1 
    guestScore.textContent = guestPoints 
}

function twopointGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints 
}

function threepointGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints 
}