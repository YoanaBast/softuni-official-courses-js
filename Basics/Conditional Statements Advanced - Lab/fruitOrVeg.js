function solve(item) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'carrot'];

    let isFruit = fruits.includes(item);
    let isVegetable = vegetables.includes(item);

    switch(true) {
        case isFruit:
            console.log('fruit'); break;

        case isVegetable:
            console.log('vegetable'); break;

        default:
            console.log('unknown'); break;
    }
}   

solve('cherry')