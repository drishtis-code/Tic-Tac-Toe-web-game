let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#Reset-btn");
let newGamebtn=document.querySelector("#newgame-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () => {
    turnO=true;
    eableboxes();
    
};
const eableboxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO === true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
    
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
};
const showwinner = (winner ) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;  
    msgcontainer.classList.remove("hide");
    disabledboxes();
    

};
const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if( pos1val === pos2val && pos2val === pos3val ){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
Resetbtn.addEventListener("click",resetGame);