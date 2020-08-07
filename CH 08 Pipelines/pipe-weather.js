import { pipe } from 'lodash/fp';

function  toCelsius(kelvin){
    return 300 - kelvin;
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

const temperatureDescription = pipe(
  toCelsius,
  describeTemperature
)(273);

console.log(temperatureDescription);