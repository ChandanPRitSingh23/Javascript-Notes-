//sequence of characters used to represent text 
let str = "Chandan";
let str1 = 'Chand';
console.log(str.length);
console.log(str[0]);  //that how u find each letter in string


//to find the string lenght

//? string_name.length


//* Template literals in JS
// a way to have embedded expressions in strings

let obj ={
    item: "pen",
    price: 10,

};
console.log("the cost of" ,obj.item," is",obj.price);
//or

//template literals
// template literals ke liye commas use krne hoge jisko bolte ha backtick(`);
// in mac the command is option+`
let output = `the cost of ${obj.item} is ${obj.price} rupees`;





// the cost of pen is 10

// if u want to acces any item 
// simply use obj.item, obj.price depend on the name ,name may varies.


let sum = `sum of the numbers is ${1+2+3}`;
console.log(sum)


// \n = second line se start krta ha likhna