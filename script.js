var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
const deleteButton = document.getElementsByClassName("dltBtn");


//return length of input
function inputLength() {
	return input.value.length;
}

//create new li item
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDelete(li);
	 
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggle "done" class to li
function togglerLi(event) {
if (event.target.tagName === "LI") {
	event.target.classList.toggle("done");
}
}

//add delete button to li
function addDeleteButton(li) {
	for (let i = 0; i < li.length; i++) {
		createDelete(li[i]);
	}	
}

///create delete button
function createDelete(element) {
	let button = document.createElement("BUTTON");
	element.appendChild(button);	
	button.appendChild(document.createTextNode("delete"));
	button.classList.add("dltBtn");	
    element.onclick=removeParent;
}


// remove list item
function removeParent(evt){
	evt.target.parentNode.remove();
} 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", togglerLi);

addDeleteButton(li);