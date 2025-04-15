function solve(nightsStay, typeStay, rating) {
    let nights = 0
    let discount = 0
    let csat = 0
    let total = 0

    if (typeStay === 'room for one person') {
        nights = (nightsStay-1) * 18
    } else if (typeStay === 'apartment') {
        nights = (nightsStay-1) * 25
        if (nightsStay < 10) {
            discount = 0.30 * nights
        } else if (nightsStay >= 10 || nightsStay <= 15) {
            discount = 0.35 * nights 
        } else if (nightsStay < 15) {
            discount = 0.50 * nights 
        }
    } else if (typeStay === 'president apartment') {
        nights = (nightsStay-1) * 35
        if (nightsStay < 10) {
            discount = 0.10 * nights
        } else if (nightsStay >= 10 && nightsStay <= 15) {
            discount = 0.15 * nights 
        } else if (nightsStay > 15) {
            discount = 0.20 * nights 
        }
    }
    let subtotal = nights - discount

    if (rating === 'positive') {
        csat = 0.25 * subtotal
        total = subtotal + csat
    } else if (rating === 'negative') {
        csat = 0.10 * subtotal
        total = subtotal - csat
    }
    
    console.log(total.toFixed(2))

}

solve(2,     "apartment",     "positive")