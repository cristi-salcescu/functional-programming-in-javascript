function split(text){
    return text.split(' ');
}

const arr2 = ["raspberry strawberry", "blueberry"]
    .flatMap(split)
    
console.log(arr2);
//[ 'raspberry', 'strawberry', 'blueberry' ]