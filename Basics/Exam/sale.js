function solve(input) {
    let countSea = input[0]
    let countMount = input[1]
    let total = 0

    let index = 1; 
    while (true) {
        let command = input[index]
        index++
        if (command === 'Stop') {
            break;
        } else if (countMount === 0 && countSea === 0) {
            break;
    
        } else if (command === 'sea') {
            if (countSea > 0) {
                total += 680
                countSea -= 1
            } 
        } else if (command === 'mountain') {
            if (countMount > 0) {
                total += 499
                countMount -= 1
            }
        }
    }
    if (countMount === 0 && countSea === 0) {
        console.log(`Good job! Everything is sold.`)
    } 

    console.log(`Profit: ${total} leva.`)
    
}


solve([2, 2, "sea", "mountain", "sea", "sea", "mountain"]);