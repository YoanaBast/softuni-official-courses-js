function shop(budget, videoQ, cpuQ, ramQ) {
    let videoP = 250;
    let videoT = videoP * videoQ;
    let cpuP = 0.35 * videoT;
    let ramP = 0.10 * videoT;
    let discount = 0;
    let subtotal = videoT + cpuP*cpuQ + ramP*ramQ;

    if (videoQ > cpuQ) {
        discount = 0.15 * subtotal;
    }

    let total = subtotal - discount;

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);

    }
}

shop(900,

    2,
    
    1,
    
    3)
//. Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка.