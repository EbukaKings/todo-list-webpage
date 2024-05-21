const inputDisplay = ['cook dinner', 'wash cloths'];

function renderTodo() {
    let todolist = '';
    for (let i = 0; i < inputDisplay.length; i++) {
       const todo = inputDisplay[i];
       const html = `
       <p>
       ${todo}
       <button onclick="inputDisplay.splice(${i}, 1);
       renderTodo()
       ">Delete</button>
       </p>`
       todolist += html;
}
document.querySelector('.js-todolist')
        .innerHTML = todolist;

 }

function clickTodo() {
    const inputElem = document.querySelector(".js-input");
    const inputValue = inputElem.value;
    inputDisplay.push(inputValue);
    console.log(inputDisplay);
    renderTodo();
};