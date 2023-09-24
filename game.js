 
let computerMove = '';
function pickComputerMove(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove ='Paper';
    }
    else{
        computerMove = 'Scissors';
    }
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0 ,
    losses : 0,
    ties : 0
};
   

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    document.querySelector('.Scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  });



function playerGame(playerMove){
    pickComputerMove();
    let result = '';
// Rock
    if(playerMove == 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie'
        }
        else if(computerMove === 'Paper'){
            result = 'I Win';
        }
        else{
            result = 'I lost';
        }
    }
    
    else if(playerMove == 'Paper'){
        //Paper
        if(computerMove === 'Rock'){
            result = 'I Win'
        }
        else if(computerMove === 'Paper'){
            result = 'Tie';
        }
        else{
            result = 'I Lost';
        }
    }
    else{
        //Scissors
        if(computerMove === 'Rock'){
            result = 'I Lost'
        }
        else if(computerMove === 'Paper'){
            result = 'I Win';
        }
        else{
            result = 'Tie';
        }
    }
    
    if(result === 'I Win'){
        score.wins += 1; 
    }
    else if(result === 'I Lost'){
        score.losses += 1;
    }
    else if(result === 'Tie'){
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score)); // localObject only supports strings

    
    
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.moves').innerHTML = `You pick ${playerMove} , computer picks ${computerMove}`;
    document.querySelector('.Scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      

   
}
function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.Scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

