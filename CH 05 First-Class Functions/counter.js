function createCount(){
    let counter = 0;
    return function (){
        counter = counter + 1;
        return counter;
    }
}

const count = createCount();
console.log(count());
console.log(count());
console.log(count());