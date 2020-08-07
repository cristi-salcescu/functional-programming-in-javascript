const arr = [1, [2, 3]];

console.log(arr);
console.log(arr.flat());
//[ 1, 2, 3 ]

function split(text){
    return text.split(' ');
}

const newArray = ["raspberry strawberry", "blueberry"]
    .map(split)
    .flat();

console.log(newArray);
//[ 'raspberry', 'strawberry', 'blueberry' ]