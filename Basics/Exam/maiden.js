function solve(partyPrice, countLoveW, countRoses, countKey, countPic, countLuck) {
    let loveW = 0.6 * countLoveW
    let rose = 7.2 * countRoses
    let key = 3.6 * countKey
    let pic = 18.2 * countPic
    let luck = 22 * countLuck

    let discount = 0
    let subtotal = loveW + rose + key + pic + luck

    let totalCount = countLoveW + countRoses + countKey + countPic + countLuck
    if (totalCount >= 25) {
        discount = 0.35 * subtotal
    }
    let total1 = subtotal - discount
    let hosting = 0.10 * total1
    let total = total1 - hosting

    if (total >= partyPrice) {
        console.log(`Yes! ${(total - partyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(partyPrice - total).toFixed(2)} lv needed.`)
    }
}

solve(40.8, 20, 25, 30, 50, 10)