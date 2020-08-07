const numbers = [4, 2, 3, 1];

function asc(a, b) {
    if(a === b){
        return 0
    } else {
        if (a < b){
            return -1;
        } else {
            return 1;
        }
    }
}

const sortedNumbers = numbers.slice().sort(asc);
console.log(sortedNumbers);