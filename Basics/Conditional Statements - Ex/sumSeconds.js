function sumSeconds (sec1, sec2, sec3) {
    let seconds = sec1 + sec2 + sec3;
    let hours = 0;
    while (seconds >= 60) {
        hours += 1;
        seconds -= 60;
    }

    if (seconds < 10) {
        console.log(`${hours}:0${seconds}`);
    } else {
    console.log(`${hours}:${seconds}`);
    }
}

sumSeconds(35, 45, 44)