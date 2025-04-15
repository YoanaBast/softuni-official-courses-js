function solve(numPpl, numNights, numCards, numTickets) {
    let night = 20 * numNights
    let card = 1.6 * numCards
    let ticket = 6 * numTickets 
    let subtotal_one = night + card + ticket
    let subtotal = subtotal_one * numPpl
    let extra = 0.25 * subtotal;
    let total = subtotal + extra;
    console.log(total.toFixed(2))
}

solve(20, 14, 30, 6)