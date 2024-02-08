var convertTemperature = function (celsius) {
     return [celsius + 273.15, 1.8 * celsius + 32];
};

// example
// kelvin C + 273,15
//far 1.8 * C + 32

convertTemperature(36.5);
