let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame =document.querySelector("#new-game");

let turn0 = true;
let count = 0;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const showwinner = (winer) => {
    msg.innerText = `Conguralation, Player ${winer} Wins!`;
    msgcontainer.classList.remove("hide");
}
const cheakWinner = () => {
    winpattern.forEach((pattern) => {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if (a == b && b == c && a != "") {
            showwinner(a);
            return true;
        }
        
    })
}
let iswiner = cheakWinner();
const cheakdraw = (c) => {
    if (c == 9 && !iswiner) {
    msg.innerText = `It's a Draw!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        count++;
         if (turn0) {
            box.innerText = "X";
            turn0 = false;
         } else {
            box.innerText = "O";
            turn0 = true;
         }

         box.disabled = true;
         cheakWinner ();
         cheakdraw(count);
    });
});



const disableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = true;
    })

}

const enableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })

}

const resetgame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);