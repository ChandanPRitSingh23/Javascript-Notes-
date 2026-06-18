let x = Number(prompt("Enter you full marks: "));
if(x>=80 && x<=100){
    console.log("GRADE A");
}else if(x>=89 && x<=70){
    console.log("GRADE B");
}else if(x>=69 && x<=60){
    console.log("GRADE C");
}else if(x>=59 && x<=50){
    console.log("GRADE D");
}else if(x>=49 && x<=0){
    console.log("GRADE F");
}else{
    console.log("INVALID NUMBER");
}