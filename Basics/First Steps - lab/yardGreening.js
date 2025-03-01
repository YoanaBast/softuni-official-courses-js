function yardGreening(meters) {
    let price1M2 = 7.61;
    let discount = 0.18  * (meters * price1M2)
    let sumNeeded = (meters * price1M2) - discount;
    console.log(`The final price is: ${sumNeeded} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550)