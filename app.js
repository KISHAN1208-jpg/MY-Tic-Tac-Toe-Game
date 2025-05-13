let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drawcount=0;
let turn0=true;
const winpattern=[[0,1,2],
                   [0,3,6],
                   [0,4,8],
                   [1,4,7],
                   [2,5,8],
                   [2,4,6],
                   [3,4,5],
                   [6,7,8],
                ];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
           box.innerText="X";
           turn0=true;
        }
        box.disabled=true; 
        drawcount++;
        let iswinner=checkwinner();
        if(drawcount===9 && !iswinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText=`Draw Game!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
      for(let pattern of winpattern){
          let pos1val=boxes[pattern[0]].innerText;
          let pos2val=boxes[pattern[1]].innerText;
          let pos3val=boxes[pattern[2]].innerText;
         if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
         }
      }
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText= `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const resetgame=()=>{
    turn0=true;
    drawcount=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

