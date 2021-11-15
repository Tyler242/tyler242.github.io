const apiURL =
  'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=744fe90a723fbf1d7ad8053159c6a1d5';

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      alert('Error with api call/response');
    }
  })
  .then((jsObject) => {
    let weatherData = jsObject.list[0];
    document.getElementById('current-temp').textContent = weatherData.main.temp;

    const imagesrc =
      'https://openweathermap.org/img/w/' +
      weatherData.weather[0].icon +
      '.png';
    const desc = weatherData.weather[0].descritption;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });
