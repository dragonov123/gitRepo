
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msgcontainer");
let newgame=document.querySelector("#newgame");
let player1=document.querySelector(".player1");

let player2=document.querySelector(".player2");

let submit1=document.querySelector(".submit1");
let submit2=document.querySelector(".submit2");
  
let but1=document.querySelectorAll(".but");

let ask=document.querySelector(".ask");
let ask1=document.querySelector(".ask1");
let ask2=document.querySelector(".ask2");
let next=document.querySelector(".next");
let gamef=document.querySelector(".container");





ask.classList.remove("hide1");

let save1;

let win;
submit1.addEventListener("click", () => {
    
    save1=player1.value ;
})

submit2.addEventListener("click", () => {
    
    save1=player2.value ;
})
next.addEventListener("click", () => {
    
ask2.classList.remove("hide2");
ask1.innerText=`${save1} wants to play with`;
ask.classList.add("hide1");


})

let turno;
but1.forEach((ox) => {
    ox.addEventListener("click",() => {
      if(ox.innerText=="O")
      {
        turno=true;
        win="O";
      }
      else
      {
        turno=false;
        win="X";
      }
      ask.classList.add("hide1");
      ask2.classList.add("hide2");
      gamef.classList.add("game1");
      gamef.classList.remove("container");

    })
})
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;

boxes.forEach((box) => {
    
    box.addEventListener("click", () => {
        count++;
        if(turno)
        {
            box.innerText = "O";
            turno=false;

        }
        else
        {
            box.innerText = "X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
        if(count==9)
        {
            draw();
        }
        
    })
})


const checkwinner = () => {
    for(let pattern of winPattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1==pos2 && pos2 == pos3 && pos3== pos1)
            {
                if(pos1==win)   
                {
                showwinner(save1);
                }
                else
                {
                    showwinner(save2)
                }
            }
            
        }
    }
}
const showwinner = (a) => {
    msg.innerText=`Congratulations! The Winner is ${a} `;
    msgcontainer.classList.remove("hide");
}
const draw = () => {

    msg.innerText=`Draw`;
    msgcontainer.classList.remove("hide");
}

newgame.addEventListener("click" , () => {
   boxes.forEach((newg) => {
    newg.innerText="";
   })
   msgcontainer.classList.add("hide");
   boxes.forEach((newg) => {
    newg.disabled=false;
   })
   count=0;
   
   
})

resetBtn.addEventListener("click", () => {
    boxes.forEach((reset) => {
        reset.innerText="";
    })
    boxes.forEach((newg) => {
        newg.disabled=false;
       })
       count=0;
       
    
   
})