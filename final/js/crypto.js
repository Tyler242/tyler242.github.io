// Get the coin name from the url and format it to call the api
const queryString = window.location.search.split('=')[1].toLowerCase();
const coinName = queryString;

// The formatted and completed apiUrl
const apiUrl = 'https://api.coinstats.app/public/v1/coins/' + coinName;
// console.log(apiUrl);
getApiData(apiUrl);

async function getApiData(url) {
  // The api url
  let response = await fetch(url);
  let data = await response.json();

  generatePage(data.coin);
}

function generatePage(coinInfo) {
  console.log(coinInfo);
  const mainElem = document.querySelector('#main');

  // create a div element
  let divElem = document.createElement('div');
  mainElem.appendChild(divElem);

  // Create the intro widget
  let headElem = createHeadWidget(
    coinInfo.name,
    coinInfo.icon,
    coinInfo.symbol
  );
  divElem.appendChild(headElem);

  // Create the data widget
  const data = [
    coinInfo.price,
    coinInfo.priceBtc,
    coinInfo.priceChange1d,
    coinInfo.priceChange1h,
    coinInfo.priceChange1w,
  ];
  let dataWidget = createDataWidget(coinInfo.name, data);
  divElem.appendChild(dataWidget);

  // Create the additional data widget
  const addData = [
    coinInfo.availableSupply,
    coinInfo.marketCap,
    coinInfo.rank,
    coinInfo.volume,
  ];
  let addDataWidget = createAddDataWidget(coinInfo.name, addData);
  divElem.appendChild(addDataWidget);
}

function createHeadWidget(name, icon, symbol) {
  // parent element
  let section = document.createElement('section');

  // header element
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = name;
  section.appendChild(h2Elem);

  // img element
  let imgElem = document.createElement('img');
  imgElem.src = icon;
  imgElem.alt = name + 'icon';
  section.appendChild(imgElem);

  // symbol
  let symElem = document.createElement('p');
  symElem.textContent = 'Symbol: ' + symbol;
  section.appendChild(symElem);

  return section;
}

function createDataWidget(name, data) {
  // parent element
  let section = document.createElement('section');

  // header element
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = name + ' Financial Data';
  section.appendChild(h2Elem);

  // format the data
  // price element
  let priceElem = document.createElement('p');
  priceElem.setAttribute('id', 'price');
  priceElem.textContent = 'Price (USD): $' + data[0].toFixed(2);
  section.appendChild(priceElem);

  // price compared to bitcoin
  let pToBTC = document.createElement('p');
  pToBTC.textContent =
    'Price Compared to Bitcoin (Price/Bitcoin): $' + data[1].toFixed(4);
  section.appendChild(pToBTC);

  // change over last hour
  let pChange1h = document.createElement('p');
  pChange1h.textContent = 'Price Change Last Hour: $' + data[3];
  section.appendChild(pChange1h);

  // change over last day
  let pChange1d = document.createElement('p');
  pChange1d.textContent = 'Price Change Last Day: $' + data[2];
  section.appendChild(pChange1d);

  // change over last week
  let pChange1w = document.createElement('p');
  pChange1w.textContent = 'Price Change Last Week: $' + data[4];
  section.appendChild(pChange1w);

  return section;
}

function createAddDataWidget(name, data) {
  // parent element
  let section = document.createElement('section');

  // header element
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = name + ' Additional Data';
  section.appendChild(h2Elem);

  return section;
}
