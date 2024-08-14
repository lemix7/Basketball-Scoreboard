let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")
let countV1 = 0;
let countV2 = 0;


function addOneV1(){
    countV1++
    home.textContent = countV1;
}
function addOneV2(){
    countV2++
    guest.textContent = countV2;
}

function addTwoV1(){
    countV1+=2
    home.textContent = countV1;
}
function addTwoV2(){
    countV2+=2
    guest.textContent = countV2;
}

function addThreeV1(){
    countV1+=3
    home.textContent = countV1;
}
function addThreeV2(){
    countV2+=3
    guest.textContent = countV2;
}

function newGame(){
    countV1 = 0;
    countV2 = 0;
    home.textContent = 0
    guest.textContent = 0
}