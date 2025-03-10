function DecimalToBinary(num, searched) {
    let count = 0
    while (num > 0) {
        let leftover = num % 2;
        if (leftover === searched) {
        count++ // adds one, increment operator
        }
        num = Math.floor(num / 2)
    }
    if (searched === 0) {
        console.log(`We have ${count} zeroes.`);
    } else if (searched === 1) {
        console.log(`We have ${count} ones.`);
    }
}

DecimalToBinary(20, 0)