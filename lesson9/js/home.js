// API Url
const url = 'https://byui-cit230.github.io/weather/data/towndata.json';
// Use the fetch api to get the town data
fetch(url)
  .then((response) => {
    // make sure we get a good response
    if (response.ok) {
      return response.json();
    } else {
      console.alert("ERROR: couldn't recieve data.");
    }
  })
  .then((response) => {
    //  Keep just the data we need.
    const townsArray = [
      response.towns[6],
      response.towns[0],
      response.towns[2],
    ];

    // Get the document elements.
    const section1 = document.querySelector('.t-one');
    const section2 = document.querySelector('.t-two');
    const section3 = document.querySelector('.t-three');
    const listSections = [section1, section2, section3];

    // Create the new elements
    let i = 0;
    townsArray.forEach((item) => {
      //   let imgElem = document.createElement('img');
      //   imgElem.setAttribute('src', item.photo);

      let h3Elem = document.createElement('h3');
      h3Elem.textContent = item.name;

      let mottoElem = document.createElement('p');
      mottoElem.setAttribute('class', 'motto');
      mottoElem.textContent = item.motto;

      let yearElem = document.createElement('p');
      yearElem.setAttribute('class', 'info');
      yearElem.textContent = 'Year Founded: ' + item.yearFounded;

      let popElem = document.createElement('p');
      popElem.setAttribute('class', 'info');
      popElem.textContent = 'Population: ' + item.currentPopulation;

      let rainElem = document.createElement('p');
      rainElem.setAttribute('class', 'info');
      rainElem.textContent = 'Average Rainfall: ' + item.averageRainfall;

      //   listSections[i].appendChild(imgElem);
      listSections[i].appendChild(h3Elem);
      listSections[i].appendChild(mottoElem);
      listSections[i].appendChild(yearElem);
      listSections[i].appendChild(popElem);
      listSections[i].appendChild(rainElem);
      
      i++;
    });
  });
