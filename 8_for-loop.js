//? for loop
//* syntax

/*
// initialization,stopping condition,increment
for(let i =1;i<=5;i++){
    console.log("chandan"); //5 execute
}
    */

//calculate sun of 1 to 5 numbers by taking n as input
let n = Number(prompt("Enter a Number: "));
let sum =0;
for(let i= 1;i<=n;i++){
    sum+=i;
}
console.log(sum);

/*
//Infinite loop 
for(let i=1;i>=0;i++){
    console.log(i)
}
*/