import { hands, choices, player, computer } from "./data.js";

/* Ability to randomize a "hand" every time, since the computer needs to choose at random */
function getRandomHand() {
  const randomValue = Math.floor(Math.random() * hands.length);
  return hands[randomValue];
}

function isStillPlaying() {
  return player.score < 5 && computer.score < 5;
}

function playGame() {
  while (isStillPlaying()) {
    /* Prompt the user about a choice. The choice has to be within 'hands' */
    const input = prompt(
      `Play rock paper scissors! Pick a choice within ${hands
        .map((hand) => hand.name)
        .join(", ")}. Reach a score of 5 to win.
    
            Player score: ${player.score}
            Computer score: ${computer.score}`
    );

    /* Shuffle a hand for the computer */
    computer.hand = getRandomHand();

    /* Select a hand based on our input */
    player.hand = choices[input];

    /* Compare the chosen "hand" with the shuffled hand that the computer has */
    if (player.hand.winsOver(computer.hand)) {
      player.score++;
      alert(
        `Player won with ${player.hand.name} against computer ${computer.hand.name}`
      );
    } else if (computer.hand.winsOver(player.hand)) {
      computer.score++;
      alert(
        `Computer won with ${computer.hand.name} against player ${player.hand.name}`
      );
    } else {
      alert(`It's a draw for a hand of ${player.hand.name}`);
    }
  }

  if (player.score === 5) {
    alert("The player won!");
  } else {
    alert("The computer won!");
  }
}

export { playGame };
