const inputDisplay = [{name:'cook dinner',duedate: '05-20-2024'}, {name: 'wash cloths', duedate: '05-20-2024'}];

// function renderTodo() {
//     let todolist = '';
//     for (let i = 0; i < inputDisplay.length; i++) {
//        const todoObject = inputDisplay[i];
//        const name = todoObject.name;
//        const duedate = todoObject.duedate;

    //    const html = `
    //    <div>${name}</div>
    //    <div>${duedate}</div>
    //    <div>
    //    <button onclick="inputDisplay.splice(${i}, 1);
    //    renderTodo()
    //    ">Delete</button>
    //    </div>
    //    `
//        todolist += html;
// }
// document.querySelector('.todo-grid')
//         .innerHTML = todolist;

//  }

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

function deleteTodo(index) {
    inputDisplay.splice(index, 1);
    renderTodo();
}


function clickTodo() {
    const inputElem = document.querySelector(".js-input");
    const name = inputElem.value;
    const inputdate = document.querySelector(".js-duedate");
    const duedate = inputdate.value
    inputDisplay.push({name: name, duedate: duedate});
    console.log(inputDisplay);
    renderTodo();
};