/*
Q1. Prompt the user to enter their full name. Generate a username for them based on the input. Start the username with "@", followed by their full name, and end it with the length of the full name.

Example:
User name = "shradhakhapra"
Username should be "@shradhakhapra13" 
*/

let name = prompt("Enter your name without spaces: ");
let username = "@" + name + name.length;
console.log("Username: ",username);