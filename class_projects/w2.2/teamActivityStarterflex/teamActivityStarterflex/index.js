let enterprise = document.querySelector('#enterprise');
let business = document.querySelector('#business');
let personal = document.querySelector('#personal');

enterprise.style.visibility = 'hidden';
business.style.visibility = 'hidden';
personal.style.visibility = 'hidden';

setTimeout(show_pers, 1000);
setTimeout(show_busi, 2000);
setTimeout(show_enter, 3000);

function show_pers() {
  personal.style.visibility = 'visible';
}

function show_busi() {
  business.style.visibility = 'visible';
}

function show_enter() {
  enterprise.style.visibility = 'visible';
}

document.querySelector('.popular').style.backgroundColor = '#ffcf2d';

let collectionAtags = document.getElementsByTagName('a');
let arrayOfATags = Array.from(collectionAtags);
arrayOfATags.pop();

for (tag of arrayOfATags) {
  tag.style.backgroundColor = '#fece02';
  addEventListener('click', signIn);
}

let collectPricingDiv = document.getElementsByClassName('pricing');
let arrayPricingDiv = Array.from(collectPricingDiv);
arrayPricingDiv[1].style.fontSize = '2em';

function signIn() {
  alert('You have signed in.');
}
