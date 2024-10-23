// 尝试从浏览器的 localStorage 中获取并解析分数数据。
// 如果获取失败（如键名不存在或存储为空），则使用一个默认的分数对象 { wins: 0, losses: 0, ties: 0 }。
// 后续当score更新了之后会直接从本地那score数据
// 当页面刷新或关闭时，页面中的数据（如分数、价格等）会丢失。localStorage 允许你将数据保存在浏览器中，即使用户关闭页面或刷新后，数据仍然可用。
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if(playerMove === computerMove) {
    result = 'Tie';
    score.ties++;
  } else if (playerMove === 'rock' && computerMove === 'scissors') {
    result = 'you win';
    score.wins++;
  } else if (playerMove === 'paper' && computerMove === 'rock') {
    result = 'you win';
    score.wins++;
  } else if (playerMove === 'scissors' && computerMove === 'paper') {
    result = 'you win';
    score.wins++;
  } else {
    result = 'computer wins';
    score.losses++;
  }
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement()

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
<img src="./${playerMove}.png" class="move-icon2">
<img src="./${computerMove}.png" class="move-icon2">
Computer`;
}
function pickComputerMove(){
  // 	Math.random()生成一个范围在 0（含）到 1（不含） 的随机浮点数，
  const randomIndex = Math.floor(Math.random() * 3);
  const choices = ['rock', 'paper', 'scissors'];
  return choices[randomIndex];
}

function updateScoreElement() {
  document.querySelector('.score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId =  setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
 
}