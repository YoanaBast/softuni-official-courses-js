function solve(day) {
    let price;
    switch(day) {
        case 'Monday':
            price = 12; break;
        case 'Tuesday':
            price = 12; break;
        case 'Wednesday':
            price = 14; break;
        case 'Thursday':
            price = 14; break;
        case 'Friday':
            price = 12; break;
        case 'Saturday':
            price = 16; break;
        case 'Sunday':
            price = 16; break;
        default:
            price = 0; break;
    }

    console.log(price)
}

solve('Monday')