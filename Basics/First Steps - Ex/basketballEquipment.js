function basket(yearly_price) {
    let shoes = yearly_price - 0.40 * yearly_price
    let clothes = shoes - 0.20 * shoes
    let ball = clothes / 4
    let acc = ball / 5
    let total = yearly_price + shoes + clothes + ball + acc
    console.log(total)
}

basket(365)
