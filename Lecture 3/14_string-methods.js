// there are built in functions to manipulate a string

//?  str.toUpperCase()
let str = "chandan prit singh";
console.log(str.toUpperCase()); 

//? str.LowerCase()
let str1 = "CHANDAN ";
console.log(str1.toLowerCase()); 

//? str.trim 
let str2 = "      CHANDAN      Prit";
console.log(str2.trim());  
// staring and ending wale space ko dlt krdeta ha yehhhs






// agr mainne yehh methods apply keya kise string pr toh wo 
// new string bna dega uss me change nhi krega wooo




//? str.slice(startTransition,end?) 
// return part of string
// maine koe string likhe and ab mujko us sting me se ek part chiye

let str3 = "012345678";
console.log(str3.slice(1,6)); //12345 



//? str1.concat(str2) 
// join str2 with str 1 

let str = "Chandan";
let str1  = "prit";
console.log(str.concat(str1)); //Chandanprit
console.log(str1.concat(str)); //pritChandan



