function read(pagesNeeded, pagedPerH, daysLeft) {
    let bookTime = pagesNeeded / pagedPerH
    let dailyHours = bookTime / daysLeft
    console.log(dailyHours)
}

read(212, 20, 2)