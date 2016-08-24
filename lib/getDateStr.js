function pad(number) {
  return (number < 10) ? '0' + number : number;
}

function getDateStr(dataObj) {
  return dataObj.getUTCFullYear() +
    '-' + pad(dataObj.getUTCMonth() + 1) +
    '-' + pad(dataObj.getUTCDate()) +
    'T' + pad(dataObj.getUTCHours()) +
    '-' + pad(dataObj.getUTCMinutes()) +
    '-' + pad(dataObj.getUTCSeconds()) +
    '.' + (dataObj.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
    'Z';
}

module.exports = getDateStr;
