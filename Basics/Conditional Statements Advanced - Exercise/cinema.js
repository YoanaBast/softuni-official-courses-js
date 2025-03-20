function solve(name, r, c) {
    let result = 0;
    if (name === 'Premiere') {
        result = 12 * r * c;
    } else if (name === 'Normal') {
        result = 7.50 * r * c;
    } else if (name === 'Discount') {
        result = 5 * r * c;
    }

    console.log(`${result.toFixed(2)} leva`)
}

solve("Premiere",

10,

12)