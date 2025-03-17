function solve(item, day, quan) {

    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekend = ['Saturday', 'Sunday'];
    let result; 

    let weekPrice = {
        'banana': 2.50,
        'apple': 1.20,
        'orange': 0.85,
        'grapefruit': 1.45,
        'kiwi': 2.70,
        'pineapple': 5.50,
        'grapes': 3.85
    };

    let endPrice = {
        'banana': 2.70,
        'apple': 1.25,
        'orange': 0.90,
        'grapefruit': 1.60,
        'kiwi': 3.00,
        'pineapple': 5.60,
        'grapes': 4.20
    };
        
    if (weekdays.includes(day)) {
        if (weekPrice.hasOwnProperty(item)) {   //The hasOwnProperty() method in JavaScript is used to check if an object contains a specific property.
        result = weekPrice[item] * quan
        console.log(result.toFixed(2))
        } else {
            console.log('error');
        }
    } else if (weekend.includes(day)) {
        if (endPrice.hasOwnProperty(item)) { 
        result = endPrice[item] * quan
        console.log(result.toFixed(2))
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    }

}

solve("tomato", "Monday", 0.5)