function solve(n1, n2, operation) {
    let result = 0;
    let type = 'empty';

    if (operation === "+" || operation ===  "-" || operation === "*" || operation === "**") {
         if (operation === "+"){
            result = n1 + n2
         } else if (operation ===  "-"){
            result = n1 - n2
         } else if (operation === "*"){
            result = n1 * n2
         } else if (operation === "**"){
            result = n1 ** n2
         }

        if (result % 2 === 0) {
            type = 'even'
        } else {
            type = 'odd'
        }
        console.log(`${n1} ${operation} ${n2} = ${result} - ${type}`)

    } else if (operation === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            result = n1 / n2
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
        }

    } else if (operation === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            result = n1 % n2
            console.log(`${n1} % ${n2} = ${result}`)
        }
    } else {
        console.log("Invalid operation")
    }
}

solve(10,  5,  "**")