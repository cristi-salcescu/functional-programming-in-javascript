function toCelsius(kelvin){
    const celsius = (kelvin - 273.15);
    return Math.round(celsius * 100) / 100;
}

function toChangeAction(temperature){
    return {
        type : 'CHANGE_TEMPERATURE',
        temperature
    }
}

function logIdentity(value){
    console.log(value);
    return value;
}

Promise.resolve(280)
    .then(logIdentity)
    .then(toCelsius)
    .then(logIdentity)
    .then(toChangeAction)
    .then(logIdentity);
