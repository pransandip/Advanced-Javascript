class Player {
  score = 0;

  pause() {
    return "you paused the game";
  }

  exit() {
    return "you exited the game";
  }
}

const player = new Player();

console.log(player);
console.log((player.score += 2));
console.log(player.score);
