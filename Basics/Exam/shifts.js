function solve(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);

    let count = 0;

    for (let kk = K; kk <= 8; kk++) {
        for (let ll = 9; ll >= L; ll--) {
            for (let mm = M; mm <= 8; mm++) {
                for (let nn = 9; nn >= N; nn--) {

                    if (kk % 2 === 0 && ll % 2 !== 0 && mm % 2 === 0 && nn % 2 !== 0) {
                        let firstNumber = `${kk}${ll}`;
                        let secondNumber = `${mm}${nn}`;

                        if (firstNumber === secondNumber) {
                            console.log("Cannot change the same player.");
                        } else {
                            console.log(`${firstNumber} - ${secondNumber}`);
                            count++;
                        }

                        if (count === 6) return; // Exit all loops after 6 valid swaps
                    }

                }
            }
        }
    }
}

solve(['7', '6', '8', '5'])
// solve(['6', '7', '5', '6'])