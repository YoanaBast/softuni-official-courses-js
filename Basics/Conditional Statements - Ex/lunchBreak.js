function solve (name, ep, br) {
    // Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.
    let lunch = 1/8 * br;
    let rest = 1/4 * br;
    let timeLeft = br - lunch - rest;

    if (ep <= timeLeft) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - ep)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(ep - timeLeft)} more minutes.`);
    }
}

solve("Teen Wolf", 48, 60)