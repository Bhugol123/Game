let userScore = 0;
let computersScore = 0;

const choices = document.querySelectorAll('.choice');

const msg = document.querySelector('#msg');
const userScorePara= document.querySelector('#user-score');
const computersScorePara = document.querySelector('#computer-score');




const genComputer =()=>{
  let option = ['rock', 'paper', 'scissors'];
 const randIndex = Math.floor( Math.random()*3);
 return option[randIndex];
}

const drawGame = ()=>{
  msg.innerText = 'Game was draw!';
  msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, userChoice, compChoice)=>{
  if (userWin){
   userScore++;
   userScorePara.innerText = userScore;
    msg.innerText = ' you win!'
    msg.style.backgroundColor ='green';
    
  } else {
   computersScore++;
   computersScorePara.innerText = computersScore;
    msg.innerText = 'computer win!'
    msg.style.backgroundColor ='red';
  }
}


const playGame = (userChoice)=>{
  const compChoice = genComputer();
  console.log('comp choice =', compChoice);

  if (userChoice===compChoice){
      drawGame();
  }else {
    let userWin = true; 
    if (userChoice=== 'rock'){
      userWin = compChoice === 'paper'? false: true;
  } else if (userChoice = 'paper'){
    userWin =  compChoice === 'scissorr'? false : true;
  } else {
    userWin = compChoice==='rock'? false : true;
  }
  showWinner (userWin);
}};




choices.forEach((choice) =>{
  console.log(choice);
  choice.addEventListener('click',()=>{
    const userChoice = choice.getAttribute('id');
       playGame(userChoice);
  });
});