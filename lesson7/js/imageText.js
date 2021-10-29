// Get all the figure elements.
const figElements = document.getElementsByTagName('figure');
const figArray = [...figElements];

// Get all the child elements that are images.
figArray.forEach((element) => {
  element.children[1].innerHTML +=
    ' ' + element.children[0].getAttribute('alt');
});
