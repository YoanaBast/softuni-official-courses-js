// градус = радиан * 180 / π. Числото π в JavaScript програми е достъпно чрез Math.PI

function radToDeg(rad) {
    let deg = rad * 180 / Math.PI;
    console.log(deg);
}

radToDeg(3.1416)