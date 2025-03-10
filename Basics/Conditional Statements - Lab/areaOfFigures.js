function figureArea(type, sideA, sideB) {
    if (type === 'square') {
        let area = sideA * sideA;
        console.log(area.toFixed(3));
    } else if (type === 'rectangle') {
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (type === 'circle') {
        let area = Math.PI * sideA ** 2;
        console.log(area.toFixed(3));
    } else if (type === 'triangle') {
        let area = 1/2 * sideA * sideB;
        console.log(area.toFixed(3));
    } else {
        console.log('invalid input')
    }
}

figureArea('square', 5)
