/* Create objects that represent the player and the computer. These objects should have a name,
      as well as the current score that they have accumulated. */
function createPlayer(name) {
  return {
    name,
    score: 0,
    hand: null,
  };
}

const ROCK = {
  name: "rock",
  winsOver: (otherHand) => {
    return otherHand.name === SCISSORS.name;
  },
};

const PAPER = {
  name: "paper",
  winsOver: (otherHand) => {
    return otherHand.name === ROCK.name;
  },
};

const SCISSORS = {
  name: "scissors",
  winsOver: (otherHand) => {
    return otherHand.name === PAPER.name;
  },
};

const hands = [ROCK, PAPER, SCISSORS];

const choices = {
  rock: ROCK,
  paper: PAPER,
  scissors: SCISSORS,
};

const player = createPlayer("Player");
const computer = createPlayer("Computer");

export { hands, choices, player, computer };
