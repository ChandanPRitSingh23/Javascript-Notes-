//Create a game where you start 
// with any random game number. 
// Ask the user to keep guessing 
// the game number until the user 
// enters correct value.

let game_number = 25;
let x = Number(prompt("Enter Number: "));

while(x != game_number){
      x = Number(prompt("Enter Number again: "));
        console.log("Wrong pass");
}
console.log("YOU SUCCESFULLY FINISHED THE GAME");
