let a = 40;
let b = 50;
let c = 60;
let d = 70;

if (a > b && a > c && a > d) {
    console.log("A -> Largest");
}
else if (b > a && b > c && b > d) {
    console.log("B -> Largest");
}
else if (c > a && c > b && c > d) {
    console.log("C -> Largest");
}
else {
    console.log("D -> Largest");
}