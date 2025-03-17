function count(budget, peopleQ, peopleP) {
    let decorP = 0.10 * budget;
    let clothes = peopleP * peopleQ;

    if (peopleQ > 150) {
        clothes -= clothes * 0.10;  //dicount 10%
    }

    let expenses = decorP + clothes;

    if (expenses <= budget) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses - budget).toFixed(2)} leva more.`)
    }
}

count(20001,

120,

55.5)
