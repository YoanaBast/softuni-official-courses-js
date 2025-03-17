function solve(hour, day) {
    let daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(day)) {
        if (hour >= 10 && hour <= 18) {
            console.log('open');
        } else {
            console.log('closed');
        }
    } else {
        console.log('closed');
    }
}

solve(19, "Friday")

