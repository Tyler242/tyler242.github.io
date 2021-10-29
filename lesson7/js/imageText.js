// Get all the picture elements.
const picElements = document.getElementsByTagName('picture');
const picArray = [...picElements];

// Get all the child elements that are images.
picArray.forEach((element) => {
  element.children[1].innerHTML +=
    ' ' + element.children[0].getAttribute('alt');
});
