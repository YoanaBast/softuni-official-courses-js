function solve(input) {
    let days = Number(input[0]);

    let totalLiters = 0;
    let totalDegrees = 0;

    let index = 1;

    for (let i = 0; i < days; i++) {
        let dailyLiters = Number(input[index]);
        let dailyDegrees = Number(input[index + 1]);

        totalLiters += dailyLiters;
        totalDegrees += dailyLiters * dailyDegrees;

        index += 2;
    }

    let averageDegrees = totalDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}

solve([
    "3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"
]);
🖨️ Изход:
vbnet
Copy
Edit
Liter: 300.00
Degrees: 42.17
Dilution with distilled water!