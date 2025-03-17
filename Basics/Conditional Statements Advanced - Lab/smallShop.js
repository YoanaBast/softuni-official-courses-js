function solve(item, city, quan) {
    let coffee, water, beer, sweets, peanuts;

    switch(city) {
        case 'Sofia':
            coffee = 0.50
            water = 0.80
            beer = 1.20
            sweets = 1.45
            peanuts = 1.60
            break;

        case 'Plovdiv':
            coffee = 0.40
            water = 0.70
            beer = 1.15
            sweets = 1.30
            peanuts = 1.50
            break;

        case 'Varna':
            coffee = 0.45    
            water = 0.70
            beer = 1.10
            sweets = 1.35
            peanuts = 1.55
            break;
    }

    let selected;

    if (item === 'coffee') {
        selected = coffee
    } else if (item === 'water') {
        selected = water
    } else if (item === 'beer') {
        selected = beer
    } else if (item === 'sweets') {
        selected = sweets
    } else if (item === 'peanuts') {
        selected = peanuts     
    }
    
    let bill = selected * quan;

    console.log(bill);
}

solve("peanuts", "Plovdiv", 1)