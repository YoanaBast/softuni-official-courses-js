
// Първата цифра на първото число е в интервала от цифрата K до 8, включително.
// Втората цифра на първото число е в интервала от 9 до L, включително.
// Първата цифра на второто число е в интервала от цифрата M до 8, включително.
// Втората цифра на второто число е в интервала от 9 до N, включително.

// За да бъде възможна една смяна, първата цифра на всеки от номерата трябва да бъде четна, а втората -  нечетна.
// За да бъде валидна една смяна, то номерата НЕ трябва да съвпадат.


function solve(input) {
    let K = input[0]
    let L = input[1]
    let M = input[2]
    let N = input[3]
    let count = 0

    for (let kk = K; kk < 9; kk++) {
        for (let ll = 9; ll >= L; ll--) {
            
            for (let mm = M; mm < 9; mm++) {
                for (let nn = 9; nn >= N; nn--) {
        let firstNumber = `${kk}${ll}`;
        let secondNumber = `${mm}${nn}`;
        if (firstNumber === secondNumber) {
            console.log(`Cannot change the same player.`)
        } else if (kk % 2 === 0 && ll % 2 !== 0 && mm % 2 === 0 && nn % 2 !== 0 ) {
            console.log(`${kk}${ll} - ${mm}${nn}`)
            count++
            if (count === 6) {
                count = 0
                break;

            }
                    }
                }
            }
 
        }
    }



}


// solve(['7', '6', '8', '5'])
solve(['6', '7', '5', '6'])