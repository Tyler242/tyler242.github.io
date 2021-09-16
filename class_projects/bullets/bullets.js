function add_to_list() {
    // Grab the users input using the id of the input tag
    let newName = document.querySelector('#newName').value;
    
    // Create a new li tag
    let li = document.createElement('li');

    // Give the new li tag text
    li.innerHTML = newName;

    // Append (add to the end) of the ul using the ul's id.
    document.querySelector('#nameList').appendChild(li);
};

// This will run once the button is pressed.
document.getElementById('demo').addEventListener("click", add_to_list);

