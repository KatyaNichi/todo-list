var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
const deleteButton = document.getElementsByClassName("dltBtn");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	let button = document.createElement("BUTTON");
	li.appendChild(button);
	button.appendChild(document.createTextNode("delete"));
	button.classList.add("dltBtn");	
    li.onclick=removeParent;	
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

//toggle done class to li
function togglerLi(event) {
if (event.target.tagName === "LI") {
	event.target.classList.toggle("done");
}
}

//add delete button to li
function addDeleteButton() {
	let listOfDltBtn = [];
	for (let i = 0; i < li.length; i++) {
		console.log(li[i]);
		let button = document.createElement("BUTTON");
		li[i].appendChild(button);
		button.appendChild(document.createTextNode("delete"));
		button.classList.add("dltBtn");
		listOfDltBtn[i] = button;
		li[i].onclick=removeParent;	
	}
	
	return listOfDltBtn;
}


// }
function removeParent(evt){
	evt.target.parentNode.remove();
} 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", togglerLi);

addDeleteButton();