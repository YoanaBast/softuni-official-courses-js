function toyShop (tripPrice, puzzleQ, dollQ, teddyQ, minionQ, truckQ) {
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyPrice = 4.10;
    let minionPrice = 8.20 ;
    let truckPrice = 2;
    let discount = 0;

    let subtotal = puzzlePrice*puzzleQ + dollPrice*dollQ + teddyPrice*teddyQ + minionPrice*minionQ + truckPrice*truckQ;

    if ((puzzleQ + dollQ + teddyQ + minionQ + truckQ) >= 50){
        discount = 0.25 * subtotal;
    }

    let earnings = subtotal - discount;
    let rent = 0.10 * earnings;
    let budget = earnings -  rent;

    if (budget >= tripPrice) {
        console.log(`Yes! ${(budget - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - budget).toFixed(2)} lv needed.`)
    }
}

toyShop(40.8, 20, 25, 30, 50, 10)