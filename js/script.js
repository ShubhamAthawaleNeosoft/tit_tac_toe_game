var info_x = document.getElementById("info_x");
var info_0 = document.getElementById("info_0");
var turn="X"
let gameover=false;

function changeTurn (){
    return turn ==="X"?"0" : "X"
}

function checkwin(){
    let boxtext = document.getElementsByClassName("squretext");
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !==""))
        {
            console.log(boxtext[e[0]].innerText);
            console.log(e[1]);

           info_0.style.display="none"
        //    info_x.style.display="none"
           info_x.innerHTML=boxtext[e[0]].innerText +"Won"
            // document.querySelector(".info_x").innerText=boxtext[e[0]].innertext +"Won"
           gameover =true;
        }
    })
}
let boxes=document.getElementsByClassName("squre");
Array.from(boxes).forEach(value => {
    let boxtext=value.querySelector(".squretext");
        value.addEventListener('click', ()=>{
            if(boxtext.innerText ===''){
                boxtext.innerText = turn;
                turn=changeTurn();
                checkwin();
                if(!gameover && turn =="0"){
                    info_0.style.backgroundColor="#28a745";
                    info_x.style.backgroundColor="transparent";
                }
                else if(!gameover) {
                    info_x.style.backgroundColor="#28a745";
                    info_0.style.backgroundColor="transparent";
                    
                }
            } 
           
        })
    })
