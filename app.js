let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerTurnO = true; //playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

resetbtn.addEventListener("click",()=>{
    window.location.reload();
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerTurnO){
            // playerO
            box.innerText = "O";
            playerTurnO = false;
        }
        else{
            // playerX
            box.innerText="X";
            playerTurnO = true;
        }
        box.disabled = true;

        checkWinner();
        
    });
});

const disabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const showWinner =(winner)=>{
    msg.innerText= `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner =()=>{
    for(pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }

        }
    }
}


newGameBtn.addEventListener("click",()=>{
    window.location.reload();
})