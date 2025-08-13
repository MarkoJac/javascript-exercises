const convertToCelsius = function(farenheit) {
  const degreesCelsius = (farenheit - 32) / 1.8;
  return Math.round(degreesCelsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const degreesFarenheit = (celsius * 1.8) + 32;
  return Math.round(degreesFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
