let x = prompt("enter first number: ");
let y = prompt("enter second number: ");
let operator = prompt("enter the operator (+ , - , * , / , %):  ");

if(operator == "+"){
    console.log("Answer =  ",x+y);
}else if(operator == " - "){
    console.log("Answer: ",x-y);
}else if(operator == " / "){
    console.log("Answer: ",x/y);
}else if(operator == " * "){
    console.log("Answer : ",x*y);

}else if(operator == " % "){
    console.log("Answer : ",x%y);
    
}else{
    console.log("Choose correct operator: ");
}