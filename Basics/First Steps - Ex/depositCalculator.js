// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12) 
 
function calculate(deposit, deadline, intrest) {
    let floatIntrest = intrest / 100
    let sum = deposit + deadline * ((deposit * floatIntrest) / 12);
    console.log(sum);
}

calculate(200, 3, 5.7)