function Maybe(value){

    function map(f){
        if (!value) {
            return Maybe(null);
        }

        const newValue = f(value);
        return Maybe(newValue);
    }

    function flatMap(f){
        const newValue = f(value);
        return newValue;
    }

    return {
        map,
        flatMap
    }
}


function prop(name){
    return function(obj){
        return obj[name];
    }
}

const book = {
    name: "Mastering JavaScript Functional Programming",
    author: {
        name: "Federico Kereki"
    }
}

const author = prop("author")(book);
const name = prop("name")(author);
console.log(name);
//"Federico Kereki"

Maybe(book)
    .map(prop("author"))
    .map(prop("name"))
    .flatMap(console.log)

const book2 = {
    name: "JavaScript: The Good Parts",
    author: null
}

Maybe(book2)
    .map(prop("author"))
    .map(prop("name"))
    .flatMap(console.log)
