let currentplayer="red";
let game=false;

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
function checkDraw() {
    const col = document.querySelectorAll('.col');
    const msg = document.querySelector(".msg");
    for (let cell of col) {
        if (!cell.style.backgroundColor) {
            return;
        }
    }

    msg.innerText = "It's a draw!";
    game = true;
     for (let cell of col) {
        cell.style.backgroundColor = "";
        msg.innerText="";
    }
}

function winner(){
    const col= document.querySelectorAll('.col');
    const msg= document.querySelector(".msg");
const winPatterns=[
        [0, 1, 2,3, 4, 5], [6, 7, 8,9,10,11],
        [12,13,14,15,16,17],[18,19,20,21,22,23],
        [24,25,26,27,28,29],[30,31,32,33,34,35],
        [0,6,12,18,24,30],[1,7,13,19,25,31],[2,8,14,20,26,32],
        [3,9,15,21,27,33],[4,10,16,22,28,34],[5,11,17,23,29,35],
        [0,7,14,21,28,35],[5,10,15,20,25,30]

    ];



for(const pattern of winPatterns){
    const [a,b,c,d,e,f]=pattern;
    const color = col[a].style.backgroundColor;
        if (
            color &&
            color === col[b].style.backgroundColor &&
            color === col[c].style.backgroundColor &&
            color === col[d].style.backgroundColor &&
            color === col[e].style.backgroundColor &&
            color === col[f].style.backgroundColor
        ) {
            game = true;
            msg.innerText= `Player ${color} wins!`
            return;
        }
}
}

function handleclick(el){
    if(game) return;
    if (el.style.backgroundColor) return;
    el.style.backgroundColor = currentplayer;
    winner();

    if(!game){
        checkDraw();
    }
    if(!game) {
        currentplayer = currentplayer === "red" ? "yellow" : "red";
    }
}

