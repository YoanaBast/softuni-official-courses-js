function petShop(dogNum, catNum) {
    let dogPrice = 2.50;
    let catPrice = 4;
    let total = dogNum * dogPrice + catNum * catPrice
    console.log(`${total} lv.`)
}

petShop(dogNum = 5, catNum = 4)