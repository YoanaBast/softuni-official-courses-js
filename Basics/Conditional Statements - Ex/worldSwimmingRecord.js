function swim(recordSeconds, recordMeters, IvanTime1Meter) {
    let IvanSeconds = recordMeters * IvanTime1Meter;
    let slowdown = 0;

    if (recordMeters >= 15) {
        slowdown = (Math.floor(recordMeters / 15)) * 12.5;
    }

    IvanSeconds += slowdown;

    if (IvanSeconds < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(IvanSeconds).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(IvanSeconds - recordSeconds).toFixed(2)} seconds slower.`);
    }
}

swim(10464,

    1500,
    
    20)

// съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди.
// резултатът трябва да се закръгли надолу до най-близкото цяло число.