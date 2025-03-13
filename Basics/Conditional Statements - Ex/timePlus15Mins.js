function add15 (startHour, startMinute) {
    let currentHour = startHour;
    let currentMinute = startMinute;

    if ((startMinute + 15) < 60) {
        currentMinute += 15;
    } else if ((startMinute + 15) === 60) {
        currentHour += 1;
        currentMinute = 0;
    } else if ((startMinute + 15) > 60) {
        currentHour += 1;
        currentMinute += 15;
        currentMinute -= 60;
    }

    if (currentHour >= 24) {
        currentHour -= 24;
    }

    if (currentMinute >= 10) {
        console.log(`${currentHour}:${currentMinute}`)
    } else {
        console.log(`${currentHour}:0${currentMinute}`)
    }

}

add15(23, 59)