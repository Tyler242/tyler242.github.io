// get the current tempature and windchill from the DOM object
const cTemp = parseInt(document.querySelector('#temp').innerHTML);
const wSpeed = parseInt(document.querySelector('#windSpeed').innerHTML);

// Validate temp and windspeed and calculate windchill if valid.
if (cTemp <= 50 && wSpeed >= 3) {
  const wTemp =
    35.74 +
    0.6215 * cTemp -
    35.75 * Math.pow(wSpeed, 0.16) +
    0.4275 * cTemp * Math.pow(wSpeed, 0.16);
  document.querySelector('#windChill').innerHTML = wTemp.toFixed(0);
} else {
  document.querySelector('#windChill').innerHTML = 'NaN';
}
