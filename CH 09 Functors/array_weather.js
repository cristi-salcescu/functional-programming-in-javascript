import { compose } from 'lodash/fp'

function toCelsius(kelvin){
    const celsius = (kelvin - 273.15);
    return Math.round(celsius * 100) / 100;
}

function describeTemperature(temperature){
    return temperature < 0
      ? "Freezing"
      : temperature < 15
        ? "Cold"
        : temperature < 28
          ? "Warm"
          : "Hot";
}

function logIdentity(value){
    console.log(value);
    return value;
}

[300]
    .map(toCelsius)
    .map(describeTemperature)
    .map(logIdentity);

[300]
    .map(x => describeTemperature(toCelsius(x)))
    .map(logIdentity);

[300]
    .map(compose(describeTemperature, toCelsius))
    .map(logIdentity);