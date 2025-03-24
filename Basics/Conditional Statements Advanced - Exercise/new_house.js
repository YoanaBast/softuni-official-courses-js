function solve(type, quan, budget) {
    let discount = 0;
    let markup = 0;
    let price = 0;
    let subtotal = 0;

    switch(type) {
        case 'Roses':
            price = 5;
            subtotal = quan * price;
            if (quan > 80) {
                discount = 0.10 * subtotal;
            }
            break;
            
        case 'Dahlias':
            price = 3.8;
            subtotal = quan * price;
            if (quan > 90) {
                discount = 0.15 * subtotal;
            }
            break;

        case 'Tulips':
            price = 2.8;
            subtotal = quan * price;

            if (quan > 80) {
                discount = 0.15 * subtotal;
            }
            break;

        case 'Narcissus':
            price = 3;
            subtotal = quan * price;

            if (quan < 120) {
                markup = 0.15 * subtotal;
            }
            break;

        case 'Gladiolus':
            price = 2.5;
            subtotal = quan * price;
            if (quan < 80) {
                markup = 0.20 * subtotal;
            }   
            break;
    
        default:
            console.log('switch case error');
            break;  
    }
    let total = subtotal - discount + markup;

    if (total <= budget) {
        console.log(`Hey, you have a great garden with ${quan} ${type} and ${(budget - total).toFixed(2)} leva left.`);   
    } else  {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
}

solve("Tulips",

88,

260)