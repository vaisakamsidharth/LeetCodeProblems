/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let new_arr = []
    let kelvin = (celsius + 273.15)
    let Fahrenheit  = celsius * 1.80 + 32.00
    new_arr.push(kelvin,Fahrenheit)
    return new_arr

};
convertTemperature(36.50)
