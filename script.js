let addBtn = document.querySelector('#add-todo-btn');
let inputTask = document.querySelector('#todo-input');
let deleteBtn = document.querySelector('.delete-btn');
let todoTaskcontainer = document.querySelector('#todo-list');
let container = document.querySelector('.todo-container')
// let li = document.querySelector('li');
//i had written this code on github

function getStorage() {
    todoTaskcontainer.innerHTML = localStorage.getItem('task')
}
getStorage();
function setStorage() {
    localStorage.setItem('task', todoTaskcontainer.innerHTML)
}

addBtn.addEventListener('click', () => {
    if (inputTask.value === '') {
        alert('plz input the task to proceed')

    }
    else {
        let taskList = document.createElement('li');
        let trash = document.createElement('i');
        trash.className = 'fas fa-trash'
        taskList.className = 'todo-list li';
        let inputValue = inputTask.value;
        taskList.textContent = inputValue;
        taskList.appendChild(trash);
        todoTaskcontainer.appendChild(taskList);
        inputTask.value = '';

        // let tasks = document.querySelectorAll('#todo-list li');
        // // let taskExists = false;
        // tasks.forEach(task => {
        //     if (task.innerText.includes(inputTask.value)) {
        //         alert("task has already added");
        //         taskList.style.display = 'none'
        //     }
        //     else {
        //         todoTaskcontainer.appendChild(taskList);
        //         inputTask.innerText = ''
        //         setStorage();

        //     }
        // });

    }

})

inputTask.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        if (inputTask.value === '') {
            alert('plz input the task to proceed')
        } else {
            let taskList = document.createElement('li');
            let trash = document.createElement('i');
            trash.className = 'fas fa-trash';
            taskList.className = 'todo-list li';
            let inputValue = inputTask.value;
            taskList.textContent = inputValue;
            taskList.appendChild(trash);
            todoTaskcontainer.appendChild(taskList);
            inputTask.value = '';
            setStorage();
        }
    }
});
todoTaskcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        setStorage();
    }

})
