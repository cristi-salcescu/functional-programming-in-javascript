const objects = [
    { id: 1 },
    { id: 2 }
];

function hasId(id){
    return function(element){
        return element.id === id;
    }
}

console.log(objects.find(hasId(1)));