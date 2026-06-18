//use to perform some operation on data

// + , - , * , /

/*
ARTIMETIC OPERATORS
--> modulus  -- %
--> exponentiation -- power
--> increment
--> decrement

*/


let a =5;
let b = 2;
let c = a+b;

console.log("a+b = ",a+b);  //a+b = 7
console.log("a+b = ",c); //a+b = 7

/*

MODULUS
a % b = remainder ;
5 % 2 = 1;

EXPONENTIATION
a**b = a^b;
2**2 = 4;

*/

//? Unary operator
let a =5;
let b = 2;
a = a+1;
//or
a++; //shortcut way
console.log(a);  // 6



// ++a(post incremaent(badme)) or a++(pre increment(phale))
//post increment --> phale kaam kruga fir value change hoge like example
let x = 5;

console.log(x++); 
//x++ -> use first increase later

//yaha pr x ke value 5 hogye ha but next time se x ko use krega toh x = 6 consider hoga

//++x -> Pehle value increment hogi, uske baad use hogi.


//? ASSIGNMENT OPERATOR

/* 

=
+= --> a+=4 = (a= a+4)
-=
*=
%=
**= --> a**4 = (a = a**4)

*/


//? COMPARISON OPERATOR

/* 
Equal to -> ==
equal to & type-> === (Value bhi same hai aur type bhi same hai)
not equal to -> != 
not equal to & type -> !==  (Kya value ya type me koi difference hai)
> 
>=
<
<=
*/

console.log(5 === "5"); //false


//? Logical Operators
/*
Logical AND     &&      -> Dono conditions true honi chahiye.
Logical OR      ||      ->Koi ek condition true ho to result true.
Logical NOT      !      ->True ko False aur False ko True bana deta hai.
*/

//Logical AND
let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); //true

//Logical OR
let age = 16;
let hasPermission = true;

console.log(age >= 18 || hasPermission); //true

//Logical NOT
let isLoggedIn = true;

console.log(!isLoggedIn); //false
