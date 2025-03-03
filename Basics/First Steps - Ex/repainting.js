function repaint(sheetQ, paintQ, diluQ, hours) {
    // prices
    let sheetM2 = 1.50
    let paintLit = 14.50
    let diluLit = 5.00

    // Rumen being annoying
    paintQ += paintQ * 0.10
    sheetQ += 2
    let bags = 0.40
    
    let total = (sheetQ * sheetM2) + (paintQ * paintLit) + (diluQ * diluLit) + bags
    let workerPerH = total * 0.30
    let totalWorkers = workerPerH * hours
    let totalCost = total + totalWorkers
    
    console.log(totalCost)
}

repaint(10, 11, 4, 8)