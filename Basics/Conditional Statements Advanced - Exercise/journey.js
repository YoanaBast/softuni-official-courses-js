function solve(budget, season) {
    let price = 0;
    let destination = "empty";
    let type = 'empty';

    if (budget <= 100) {
        destination = 'Bulgaria'
        if (season === 'summer') {
            price = 0.30 * budget
            type = 'Camp'
        } else if (season === 'winter') {
            price = 0.70 * budget
            type = 'Hotel'

        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            price = 0.40 * budget
            type = 'Camp'
        } else if (season === 'winter') {
            price = 0.80 * budget
            type = 'Hotel'

        }
    } else if (budget > 1000) {
        destination = 'Europe'
        price = 0.90 * budget 
        type = 'Hotel'

    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${price.toFixed(2)}`)
}


solve(678.53, "winter")