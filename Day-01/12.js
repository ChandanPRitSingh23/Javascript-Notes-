let x = Number(prompt("Enter a number: "));

if (x > 0) {
    if (x % 2 == 0) {
        console.log("Its positive and even");
    } else {
        console.log("Its positive and odd");
    }

} else if (x < 0) {

    if (x % 2 == 0) {
        console.log("Its negative and even");
    } else {
        console.log("Its negative and odd");
    }

} else if (x == 0) {

    console.log("Its zero");

} else {

    console.log("Invalid number");
}