function toUpperCase(text){
    return text.toUpperCase();
}

const arr1 = ["raspberry strawberry", "blueberry"]
    .map(toUpperCase);
console.log(arr1);
//[ 'RASPBERRY STRAWBERRY', 'BLUEBERRY' ]

function split(text){
    return text.split(' ');
}

const arr2 = ["raspberry strawberry", "blueberry"]
    .map(split)
    
console.log(arr2);
//[ [ 'raspberry', 'strawberry' ], [ 'blueberry' ] ]