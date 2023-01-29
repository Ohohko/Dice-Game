dice1 = document.querySelector('.die1');
dice2 = document.querySelector('.die2');
isGamePlaying = true;
newGameBtn = document.querySelector('.btn-new');
holdBtn = document.querySelector('.btn-hold');
rollBtn = document.querySelector('#btn-roll');
currentScore0 = document.getElementById('#cur-1');
currentScore1 = document.getElementById('#cur2');
globalScore0 = document.getElementById('#score-1');
globalScore1 = document.getElementById('#score-2');

const rollDice = ()=>{
    randomNum1 = Math.floor(Math.random()*6)+1;
    randomNum2 = Math.floor(Math.random()*6)+1;
    randomNum = randomNum1 + randomNum2;
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice1.src = "/assets/img/dice-"+randomNum1+".png";
    dice2.src = "/assets/img/dice-"+randomNum2+".png";
}


newGameBtn.addEventListener('click', ()=>{
    initialize();
});

rollBtn.addEventListener('click', ()=>{
    if(isGamePlaying){
        rollDice();
        console.log(randomNum1, randomNum2);
        if(randomNum1 === 1 || randomNum2 === 1){
            changeRoles();
            currentScoreSum = 0; 
        }
        else {
            currentScoreSum += randomNum;
        }
    }
});


