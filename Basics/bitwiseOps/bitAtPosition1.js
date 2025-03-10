function bitAtPos1(num) {
    binary = []
    while (num > 0) {
        if (num % 2 == 0) {
            binary.push(0)
        } else if (num % 2 == 1) {
            binary.push(1)
        }
        num = Math.floor(num / 2)
    }
    while (binary.length < 8) {
        binary.push(0)
    }
    position_1 = binary[1]
    console.log(position_1)
}

bitAtPos1(24)

// in JavaScript, integer division is done using Math.floor() or Math.trunc()