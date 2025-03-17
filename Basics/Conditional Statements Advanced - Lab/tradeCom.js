function solve(city, sales) {
    let percent; 
    let result;

    switch(city) {
        case 'Sofia':
            if (sales >= 0 && sales <= 500) {
                percent = 0.05;
            } else if (sales > 500 && sales <= 1000) {
                percent = 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                percent = 0.08;
            } else if (sales > 10000) {
                percent = 0.12;
            }

            if (sales < 0) {
                result = 'error'
            } else {
                result = (sales * percent).toFixed(2)
                break;
            }

        case 'Varna':
            if (sales >= 0 && sales <= 500) {
                percent = 0.045;
            } else if (sales > 500 && sales <= 1000) {
                percent = 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                percent = 0.10;
            } else if (sales > 10000) {
                percent = 0.13;
            }
            
            if (sales < 0) {
                result = 'error'
            } else {
                result = (sales * percent).toFixed(2)
                break;
            }

        case 'Plovdiv':
            if (sales >= 0 && sales <= 500) {
                percent = 0.055;
            } else if (sales > 500 && sales <= 1000) {
                percent = 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                percent = 0.12;
            } else if (sales > 10000) {
                percent = 0.145;
            }
            
            if (sales < 0) {
                result = 'error'
            } else {
                result = (sales * percent).toFixed(2)
                break;
            }

        default:
            result = 'error'
    }
console.log(result)
}

solve("Varna", -3874.50)