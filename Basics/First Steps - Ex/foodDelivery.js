function deliver(chickQ, fishQ, vegQ) {
    let chickP = 10.35
    let fishP = 12.40
    let vegP = 8.15
    let subtotal = chickQ*chickP + fishQ*fishP + vegQ*vegP
    let dessert = 0.20 * subtotal
    let delivery = 2.50

    let total = subtotal + dessert + delivery
    console.log(total)
}

deliver(2,4,3)