'use strict';
const btns = document.querySelectorAll(".btn");
const game = document.querySelector(".game");
const icons = {rock: '<i class="fa-solid fa-hand-back-fist"></i>' ,paper: '<i class="fa-solid fa-hand"></i>',scissors: '<i class="fa-solid fa-hand-scissors"></i>'};

// Winner
const rps = (your,cpu)=>{
    if(your == cpu) return "Draw";
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if(cpu == rules[your]) return "You";
    return "Cpu";
}

// Play again
const reset = ()=> {

    // Buttons
    const btn1 = document.createElement("div");
    btn1.classList.add("paper","btn");
    btn1.innerHTML = icons["paper"];
    const btn2 = document.createElement("div");
    btn2.classList.add("scissors","btn");
    btn2.innerHTML = icons["scissors"];
    const btn3 = document.createElement("div");
    btn3.classList.add("rock","btn");
    btn3.innerHTML = icons["rock"];
    const btns = [btn1,btn2,btn3];

    // Wait your choice
    move(btns);

    // Paint buttons
    game.append(btn1,btn2,btn3);
}


// End
const end = (you,cpu,res)=>{
    const points = document.getElementById("res");

    // New Buttons
    const divBtn1 = document.createElement("div");

    const btn1 = document.createElement("div");
    const user1 = document.createElement("p");
    user1.classList.add("user");
    user1.textContent = "YOU CHOICE";
    btn1.classList.add(you,"btn");
    btn1.innerHTML = icons[you];
    divBtn1.append(btn1,user1);

    const divBtn2 = document.createElement("div");
    const user2 = document.createElement("p");
    user2.classList.add("user");
    user2.textContent = "CPU CHOICE"
    const btn2 = document.createElement("div");
    btn2.classList.add(cpu,"btn");
    btn2.innerHTML = icons[cpu];
    divBtn2.append(btn2,user2);

    const msg = document.createElement("p");
    msg.classList.add("msg");

    if(res == "You"){
        msg.textContent = "YOU WIN";
        points.textContent = Number(points.textContent) + 1;
    }else if(res == "Cpu"){
        msg.textContent = "YOU LOSE";
        points.textContent = points.textContent == 0 ? 0 : Number(points.textContent) - 1;
    }else msg.textContent = "¡DRAW!";

    // Button reset
    const btn = document.createElement("button");
    btn.classList.add("reset");
    btn.textContent = "PLAY AGAIN";
    btn.addEventListener("click",(ev)=> {
        game.innerHTML = "";
        game.classList.replace("game-end","game");
        reset();
    })

    // Paint the game
    game.innerHTML = "";
    game.classList.replace("game","game-end");
    game.append(divBtn1,divBtn2,msg,btn);
}

// Your choice
const move = (btns)=>{
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click",(ev)=>{
            const choice = ev.target.className.slice(0,-4)
            const cpu = btns[Math.floor(Math.random() * 3)].className.slice(0,-4);
            const res = rps(choice,cpu);
            end(choice,cpu,res);
        })
    }
}

move(btns);
