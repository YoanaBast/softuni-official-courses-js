function bonusScore (num) {
    let bonusPoints = 0;
    let moreBonusPoints = 0;
    
    if (num <= 100) {
        bonusPoints = 5;
    } else if (num > 100 && num <= 1_000) {
        bonusPoints = num * 0.20;
    } else {
        bonusPoints = num * 0.10;
    }

    if (num % 2 == 0) {
        moreBonusPoints = 1;
    } else if (num % 5 == 0) {
        moreBonusPoints = 2;

    }
    
    let finalBonus = bonusPoints + moreBonusPoints;
    console.log(finalBonus);
    console.log(num + finalBonus);
}

bonusScore(20)