function shop(penQ, markQ, solQ, discount) {
    let markerPack = 7.20;
    let penPack = 5.80 ;
    let solutionL = 1.20;
    let subtotal = (penQ * penPack) + (markQ * markerPack) + (solQ * solutionL);
    let floatDiscount = discount / 100;
    let total = subtotal - subtotal * floatDiscount;
    console.log(total);
}

shop(2, 3, 4, 25)