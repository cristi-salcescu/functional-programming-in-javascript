function toUpperCase(text){
    return text.toUpperCase();
}

function logIdentity(value){
    console.log(value);
    return value;
}

Promise.resolve('sTudY')
    .then(logIdentity)
    .then(toUpperCase)
    .then(logIdentity);