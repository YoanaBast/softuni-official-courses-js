function solve(str) {
    switch(str) {
        case 'dog':
            console.log('mammal'); break; 
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            
            console.log('reptile'); break; 
        default:
            console.log('unknown'); break; 
    }
}


solve('snake')
