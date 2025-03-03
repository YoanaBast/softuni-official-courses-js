function fish(length_cm,width_cm,height_cm,percent_taken) {
// v = a * b * c
// 1 lit = 1000cm (cm3)
    let total_lit = length_cm * width_cm * height_cm / 1000
    let free_lit = total_lit - total_lit * percent_taken / 100
    console.log(free_lit)
}

fish(85,75,47,17)

// sorry for the naming conventions and spacings, i'm so tired :( 