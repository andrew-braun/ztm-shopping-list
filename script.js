// Select page elements and assign them to variables
let button = document.querySelector("button");
let shoppingList = document.getElementById("shopping-list");
let shoppingListItem = document.querySelectorAll(".shopping-item span");
let deleteButton = document.getElementsByClassName("delete-button");
let addItemButton = document.getElementById("add-item");
let shoppingListInput = document.getElementById("user-input");

// Apply H2 styles dynamically (just for practice)
h2List = document.querySelectorAll("h2");

for (let i = 0; i < h2List.length; i++) {
	h2List[i].className = "box-title";
}

// Functions for creating list element with delete button
const getInputLength = (input) => {
	return input.value.length;
}


const addDeleteButton = (parentElement) => {
	/* Create new button element */
	let button = document.createElement("button");
	
	/* Add text/class to button */
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("delete-button");

	/* Add button to parent element */
	parentElement.appendChild(button);

	/* Add event listener that calls delete function when button is clicked */
	button.addEventListener("click", deleteListItem, false);
}



const createListElement = (list, input) => {
	/* Create new li/span element */
	let li = document.createElement("li");
	let span = document.createElement("span");

	/* Grab input value from event listener, insert into span */
	span.appendChild(document.createTextNode(input.value));
	
	/* Append span to li */
	li.appendChild(span);
	li.classList.add("shopping-item");

	addDeleteButton(li);

	list.insertBefore(li, list.childNodes[0]);

	/* Reset input value every time function is called */
	input.value = "";
	span.addEventListener("click", listItemComplete, false);

}

/* On click, create list element and add to list */
const addToListAfterClick = () => {
	if (getInputLength(shoppingListInput) > 0) {
		createListElement(shoppingList, shoppingListInput);
	}
}

/* On Enter key press, create list element and add to list */
const addToListAfterKeyPress = (event) => {
	if (getInputLength(shoppingListInput) > 0 && event.keyCode === 13) {
		createListElement(shoppingList, shoppingListInput);
	}
}

/* Function for marking item complete */
const markListItemComplete = () => {
	this.classList.toggle("done");
}

/* Function for deleting list item */
const deleteListItem = () => {
	this.parentNode.remove();
}

/* Event listeners */
addItemButton.addEventListener("click", addToListAfterClick);

shoppingListInput.addEventListener("keypress", addToListAfterKeyPress);

/* Loop over every existing shopping list item and add event listeners */
for (var i = 0; i < shoppingListItem.length; i++) {
	shoppingListItem[i].addEventListener("click", markListItemComplete, false);
}

for (var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", deleteListItem, false);
}