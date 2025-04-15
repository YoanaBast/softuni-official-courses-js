function solve(budget, season, fishermen) {
    ship_rent = 0
    discount = 0
    more_discount = 0
    ship_rent = 0
    discount = 0
    more_discount = 0

    if (season === 'Spring') {
        ship_rent = 3000
    } else if (season === 'Autumn' || season === 'Summer') {
        ship_rent = 4200
    } else if (season === 'Winter') {
        ship_rent = 2600
    }

    if (fishermen <= 6) {
        discount = 0.10 * ship_rent
    } else if (7 <= fishermen && fishermen <= 11) {
        discount = 0.15 * ship_rent
    } else if (fishermen >= 12) {
        discount = 0.25 * ship_rent
    }

    if (fishermen > 0 && fishermen % 2 === 0 && season != 'Autumn') {
        more_discount = 0.05 * (ship_rent - discount)

    }

total = (ship_rent - discount) - more_discount
    if (budget >= total)
    {
        console.log(`Yes! You have ${(budget-total).toFixed(2)} leva left.`)
    } else
    console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`)
}

solve(2000,
    "Winter",
    13
    )