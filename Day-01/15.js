let purchase = Number(prompt("Enter the Purchase amount: "));

if (purchase >= 5000) {
    console.log("Final Amount =", purchase - (purchase * 0.30));
} else if (purchase >= 3000) {
    console.log("Final Amount =", purchase - (purchase * 0.20));
} else if (purchase >= 1000) {
    console.log("Final Amount =", purchase - (purchase * 0.10));
} else {
    console.log("Final Amount =", purchase);
}