function navMenu() {
  let nav = document.querySelector('#nav');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
}
window.onresize = () => {
  let htmlElement = document.getElementsByTagName('html');
  let nav = document.querySelector('#nav');
  if (htmlElement[0].offsetWidth >= 760) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
};
