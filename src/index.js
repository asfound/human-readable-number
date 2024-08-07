module.exports = function toReadable(number) {
  const primitives = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
  const uniquePrefixes = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];

  if (number < 15) {
    return primitives[number];
  } else {
    const resultHundreds = Math.floor(number / 100);
    const restHundreds = number % 100;
    const resultTens = Math.floor((number % 100) / 10);
    const resultUnits = Math.floor((number % 100) % 10);

    let result = '';

    if (resultHundreds > 0) {
        result = `${primitives[Math.floor(number / 100)]} hundred`;
    }


    if (restHundreds > 0 && restHundreds < 15) {
        result += ` ${primitives[restHundreds]}`;
    } else if (restHundreds >= 15 && restHundreds < 20) {
        result += ` ${uniquePrefixes[resultUnits - 2]}teen`;
    } else  if (resultTens > 0) {
        result += ` ${uniquePrefixes[resultTens - 2]}ty`;
        if (resultUnits > 0) {
            result += ` ${primitives[resultUnits]}`;
        }
    }




    return result.trim();
  } 
}
