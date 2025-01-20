const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
     displayPlayerMove("player1",moveOne);
     displayPlayerMove("player2",moveTwo);    
     addOutcome(outcome);
  };
const displayPlayerMove = (player, move) => {
 
  var imageTag = null;
  if (player === "player1")
  {
    const playerOneMove = document.getElementById("player-one-move__name");
    playerOneMove.innerText = move;
    imageTag = document.getElementById("player-one-move__img");
  }
  if (player === "player2")
   {
      const playerTwoMove = document.getElementById("player-two-move__name");
      playerTwoMove.innerText = move;
      imageTag = document.getElementById("player-two-move__img");
  }
 
    if (move === "scissors")
      imageTag.src = "./images/scissors.png";
    if (move === "rock")
     imageTag.src = "./images/rock.png";
    if (move === "paper")
      imageTag.src = "./images/paper.png"; 
}

const displayPlayerTwoMove = (moveTwo) => {
  const imageTag = document.getElementById("player-two-move__img");
  if (moveTwo === "scissors")
     imageTag.src = "./images/scissors.png";
  if (moveOne === "rock")
    imageTag.src = "./images/rock.png";
  if (moveOne === "paper")
    imageTag.src = "./images/paper.png"; 

  const playerOneMove = document.getElementById("player-one-move__name");
  playerOneMove.innerText = moveOne;

}

  const addOutcome = (outcome) => {
    
    const outcomeElement = document.createElement("h2")
    outcomeElement.id = "outcome";
    outcomeElement.innerText = outcome;    
    document.body.appendChild(outcomeElement);
  };
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  