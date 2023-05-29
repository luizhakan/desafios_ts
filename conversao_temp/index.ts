const temperaturaCelsius: number = 30;
const temperaturaFarenheit: number = 86;

const celsiusParaFarenheit = (temperaturaCelsius * 9) / 5 + 32;
const farenheitParaCelsius: number = ((temperaturaFarenheit - 32) * 5) / 9;

console.log(`30º Celsius equivalente a ${celsiusParaFarenheit}º farenheit`);
console.log(`86º Farenheit equivalente a ${farenheitParaCelsius}º celsius`);
