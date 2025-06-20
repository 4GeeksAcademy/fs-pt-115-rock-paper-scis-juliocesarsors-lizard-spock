//write your code here
console.log("Hello Rigo from the console!");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
  rock:     ["scissors", "lizard"],
  paper:    ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard:   ["spock", "paper"],
  spock:    ["scissors", "rock"]
};

function getWinner(player, cpu) {
  if (player === cpu) {
    return "Empate";
  } else if (rules[player].includes(cpu)) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}


const playerChoice = "spock";
const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

console.log(`Tú elegiste: ${playerChoice}`);
console.log(`La computadora eligió: ${cpuChoice}`);
console.log(getWinner(playerChoice, cpuChoice));
