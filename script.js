let addBtn = document.querySelector('#add-todo-btn');
let inputTask = document.querySelector('#todo-input');
let deleteBtn = document.querySelector('.delete-btn');
let todoTaskcontainer = document.querySelector('#todo-list');
let container = document.querySelector('.todo-container')
// let li = document.querySelector('li')
// let taskList = document.createElement('li');

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
        // taskList.contentEditable = false;
        let taskList = document.createElement('li');
        let trash = document.createElement('i');
        let edit = document.createElement('i');
        trash.className = 'fas fa-trash';
        taskList.className = 'todo-list li';
        edit.className = 'fa-regular fa-pen-to-square edit';
        let inputValue = inputTask.value;
        taskList.textContent = inputValue;
        taskList.appendChild(edit);
        taskList.appendChild(trash);
        todoTaskcontainer.appendChild(taskList);
        inputTask.value = '';
        setStorage();

    }

})

inputTask.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        if (inputTask.value === '') {
            alert('plz input the task to proceed')
        } else {
            let taskList = document.createElement('li');
            let trash = document.createElement('i');
            let edit = document.createElement('i');
            edit.className = 'fa-regular fa-pen-to-square edit';
            trash.className = 'fas fa-trash';
            taskList.className = 'todo-list li';
            let inputValue = inputTask.value;
            taskList.textContent = inputValue;
            taskList.appendChild(trash);
            taskList.appendChild(edit);
            todoTaskcontainer.appendChild(taskList);
            inputTask.value = '';
            setStorage();
        }
    }
});
todoTaskcontainer.addEventListener('click', function (e) {
    if (e.target.className === 'fas fa-trash') {
        e.target.parentElement.remove();
        setStorage();
    } else if (e.target.className === 'fa-regular fa-pen-to-square edit') {
        let taskItem = e.target.parentElement;
        let originalContent = taskItem.textContent;
        taskItem.contentEditable = true;
        taskItem.focus();
        taskItem.addEventListener('blur', function () {
            taskItem.contentEditable = false;
            if (taskItem.textContent.trim() === '') {
                taskItem.textContent = originalContent;
            }
            setStorage();
        }, { once: true });
    }
}
)