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

const kelvin = 300;
const celsius = toCelsius(kelvin);
const description = describeTemperature(celsius);

console.log(celsius);
//26.85
console.log(description)
//"Warm"