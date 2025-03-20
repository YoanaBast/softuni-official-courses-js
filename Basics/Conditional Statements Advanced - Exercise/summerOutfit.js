function solve(deg, part) {
    let outfit = '';
    let shoes = '';
    switch(part) {
        case 'Morning':
            if (10 <= deg && deg <= 18) {
                outfit = 'Sweatshirt'; 
                shoes = 'Sneakers'
            } else if (18 < deg && deg <= 24) {
                outfit = 'Shirt'; 
                shoes = 'Moccasins'
            } else if (deg >= 25) {
                outfit = 'T-Shirt'; 
                shoes = 'Sandals'
            }
            break;

        case 'Afternoon':
            if (10 <= deg && deg <= 18) {
                outfit = 'Shirt'; 
                shoes = 'Moccasins'
            } else if (18 < deg && deg <= 24) {
                outfit = 'T-Shirt'; 
                shoes = 'Sandals'
            } else if (deg >= 25) {
                outfit = 'Swim Suit'; 
                shoes = 'Barefoot'
            }
            break;

        case 'Evening':
            if (10 <= deg && deg <= 18) {
                outfit = 'Shirt'; 
                shoes = 'Moccasins'
            } else if (18 < deg && deg <= 24) {
                outfit = 'Shirt'; 
                shoes = 'Moccasins'
            } else if (deg >= 25) {
                outfit = 'Shirt'; 
                shoes = 'Moccasins'               
            }
            break;

        default:
            console.log('error')
            break;
    }
    console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`)
}

solve(16,

    "Morning")