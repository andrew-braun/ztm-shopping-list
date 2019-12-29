
// Select page elements and assign them to variables
let button = document.querySelector("button");
let enterButton = document.getElementById("enter");
let shoppingListInput = document.getElementById("user-input");
let shoppingList = document.getElementById("shopping-list");
let shoppingListItem = document.querySelectorAll(".shopping-item span");
let deleteButton = document.getElementsByClassName("delete-button");

// Apply H2 styles dynamically (just for practice)
h2List = document.querySelectorAll("h2");

for (let i = 0; i < h2List.length; i++) {
    h2List[i].className = "box-title";
}

// Functions for creating list element with delete button
function inputLength(input) {
    return input.value.length;
}

function createListElement(list, input) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(input.value));
    li.appendChild(span);
    list.appendChild(li);
    li.classList.add("shopping-item");
    input.value = "";
    span.addEventListener('click', listItemComplete, false);


    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.classList.add("delete-button");
    button.addEventListener("click", deleteListItem, false);
}


function addListAfterClick() {
    if (inputLength(shoppingListInput) > 0) {
        createListElement(shoppingList, shoppingListInput);
    }
}

function addListAfterKeyPress(event) {
    if (inputLength(shoppingListInput) > 0 && event.keyCode === 13) {
        createListElement(shoppingList, shoppingListInput);
    }
}

// Function for marking item complete
function listItemComplete() {
    this.classList.toggle("done");
};

// Function for deleting list item
function deleteListItem() {
    this.parentNode.remove();
};

// Event listener
enterButton.addEventListener("click", addListAfterClick);

shoppingListInput.addEventListener("keypress", addListAfterKeyPress);

for (var i = 0; i < shoppingListItem.length; i++) {
    shoppingListItem[i].addEventListener('click', listItemComplete, false);
};


for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteListItem, false)
    };








    
    // button.addEventListener("click", function() {
//     document.getElementById("shopping-list")
// })

// button.addEventListener("mouseenter", function() {
//     console.log("MOUSE!!!");
// })

// button.addEventListener("mouseleave", function() {
//     console.log("NO MOUSE!!!");
// })

