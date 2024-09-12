let inputDisplay = [];

// Function to save to localStorage
function addToStorage() {
    localStorage.setItem('inputDisplay', JSON.stringify(inputDisplay));
}
// document.querySelector(".js-error").innerHTML = '';
// Function to render to-dos
function renderTodo() {
    let todolist = '';
    inputDisplay.forEach((input, index) => {
        const html = `
            <div>${input.name}</div>
            <div>${input.duedate}</div>
            <div>
                <button class="delete-button" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todolist += html;
    });
    document.querySelector('.todo-grid').innerHTML = todolist;
}

// Function to delete a to-do
function deleteTodo(index) {
    inputDisplay.splice(index, 1);
    renderTodo();
    addToStorage();
}

// Function to handle adding a new to-do
function clickTodo() {
    const inputElem = document.querySelector(".js-input");
    const name = inputElem.value;
    const inputdate = document.querySelector(".js-duedate");
    const duedate = inputdate.value;

    if (name && duedate) { // Check if values are not empty
        inputDisplay.push({name: name, duedate: duedate});
        inputElem.value = ''; 
        inputdate.value = ''; 
        renderTodo();
        addToStorage();
    } else {
        alert('Please fill in both fields.');
        // document.querySelector(".js-error").innerHTML = "Please fill in both fields.";
    }
}

// Load data from localStorage on page load
function loadFromStorage() {
    const storedDataString = localStorage.getItem('inputDisplay');
    if (storedDataString) {
        inputDisplay = JSON.parse(storedDataString);
        renderTodo();
    } else {
        console.log('No data found in localStorage.');
    }
}


document.addEventListener('DOMContentLoaded', loadFromStorage);
