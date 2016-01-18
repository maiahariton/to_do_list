/**
 * Created by maiahariton on 1/18/16.
 */
window.handleClick();

function handleClick() {
    var submit = document.getElementById('submit'); //retrieving submit button
    submit.addEventListener('click', handleItem);

    //click on listItem
    var ul = document.getElementById('list');

    //create strike through when click on list item
    ul.onclick = function(e) {
        var li = document.createElement('li'); //create li
        var target = getEventTarget(e); //retrieve clicked item

        target.style.textDecoration = 'line-through'; //add strike through decoration
    };
}

function handleItem(e) {
//remove default action from submit event
    e.preventDefault();

    var input = document.getElementById('input'); //input area
    var ul = document.getElementById('list'); //list area
    var li = document.createElement('li');
    var deleteButton = document.createElement('button');
    var item = input.value; //retrieve text value

    //if input area is empty return false
    if (item == "") {
        return false
    } else {
        var textnode =  document.createTextNode(item); //creating text node
        deleteButton.innerText = 'X';
        li.appendChild(textnode); //append text node to li
        li.appendChild(deleteButton); //created the x
        ul.insertBefore(li, ul.childNodes[0]); //submit text to top
        input.value = ""; //erase input after submit
        deleteButton.addEventListener('click', removeItem);
    }
}

function removeItem(e) {
    e.target.parentElement.remove();
}

function getEventTarget(e) {
    //to make sure that the strikethrough stops at the clicked li element
    e = e || window.event;
    return e.target
}
