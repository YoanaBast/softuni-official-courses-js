function solve(num) {
    if (num != 0) {
        if (num >= -100 && num <= 100) {
            console.log(`Yes`);
        } else {
            console.log('No');
        }
    } else {
        console.log('No');
    }
}

solve(-101)