const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';

async function getApiData(url) {
  let response = await fetch(url);
  let data = await response.json();
  createNav(data.coins);
}

getApiData(url);

// create a nav bar that will link to a page for each crypto currency
function createNav(data) {
  // get the nav element
  const navElem = document.querySelector('#nav');
  // create the unordered list
  let ulElem = document.createElement('ul');
  ulElem.setAttribute('id', 'ul');
  // for each crypto create a list element
  for (let i = 0; i < data.length; i++) {
    createLI(data[i].name, data[i].symbol, data[i].id, ulElem);
  }
  // add the unordered list to the nav element
  navElem.appendChild(ulElem);
}

function createLI(name, symbol, id, ulElem) {
  // create the list element
  let liElem = document.createElement('li');
  // create the form tag
  let formElem = document.createElement('form');
  formElem.setAttribute('action', '/final/crypto.html');
  formElem.setAttribute('method', 'get');
  // create the input tag
  let inElem = document.createElement('input');
  inElem.setAttribute('type', 'submit');
  inElem.setAttribute('value', id);
  inElem.setAttribute('name', 'submit');

  formElem.appendChild(inElem);

  liElem.appendChild(formElem);
  // add the list element to the unordered list
  ulElem.appendChild(liElem);
}
