function M(n){
    return [n];
}

function duplicate(word){
    return [word, word]
}

function split(text){
    return text.split(" ");
}

//Left identity: M(x).flatMap(f) === f(x)
const w = Array.of('mango')
    .flatMap(duplicate)
    //['mango', 'mango']
console.log(w)

console.log(duplicate('mango'));
    //['mango', 'mango']

//Right identity: m.flatMap(M) === m
const z = M('lemon')
    .flatMap(M)
    //['lemon']
console.log(z)

//Associativity
const y = M('orange kiwi')
    .flatMap(split)
    .flatMap(duplicate);
    //[ 'orange', 'orange', 'kiwi', 'kiwi' ]

const x = M('orange kiwi')
    .flatMap(s => split(s).flatMap(duplicate))
    //[ 'orange', 'orange', 'kiwi', 'kiwi' ]
console.log(x)
console.log(y)
