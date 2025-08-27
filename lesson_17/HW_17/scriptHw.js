// const moveButton = document.querySelectorAll(".moveButton");

const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");

let block = document.querySelector(".myBlock");
let pX = 50;
let pY = 80;

const container = document.querySelector("container")


up.addEventListener("click", () => {
    pY -= 10;
    block.style.top = pY + "px";
    if (pY < 0) {
    pY = 80;
    block.style.top = pY + "px"
}
});

down.addEventListener("click", () => {
    pY += 10;
    block.style.top = pY + "px";
 if (pY > 250) {
    pY = 80;
    block.style.top = pY + "px"
}
});

right.addEventListener("click", () => {
    pX += 10;
    block.style.left = pX + "px";
    if(pX > 635){
        pX = 50;
        block.style.left = 50 + "px";
    }
});

left.addEventListener("click", () => {
    pX -= 10;
    block.style.left = pX + "px";
    if(pX<0){
        pX = 50;
        block.style.left = 50 + "px";
    }
});
