function solve(age, gen) {
    if (gen === 'f') {
        if (age < 16) {
            console.log('Miss');
        } else if (age >= 16) {
            console.log('Ms.');
        }
    } else if (gen === 'm') {
        if (age < 16) {
            console.log('Master');
        } else if (age >= 16) {
            console.log('Mr.');
        }    
    }
}

solve (12, 'f')