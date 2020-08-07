function toUpperCase(text){
    return text.toUpperCase();
}

function toLowerCase(text){
    return text.toLowerCase();
}

function trim(text){
    return text.trim();
}

const functions = [
    toUpperCase,
    toLowerCase,
    trim
];

const text = '  StARt!';
functions.forEach(f =>{
    const newText = f(text);
    console.log(newText);
});
//"START!"
//"start!"
//"StARt!"