document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    todoInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && todoInput.value.trim() !== '') {
            addTask(todoInput.value.trim());
            todoInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;

        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.addEventListener('click', function () {
            moveToDone(taskItem);
        });

        taskItem.appendChild(completeButton);
        todoList.appendChild(taskItem);
    }


    function moveToDone(taskItem) {
        const doneItem = taskItem.cloneNode(true);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.addEventListener('click', function () {
            doneList.removeChild(doneItem);
        });

        doneItem.removeChild(doneItem.querySelector('button'));
        doneItem.appendChild(deleteButton);
        doneList.appendChild(doneItem);

        todoList.removeChild(taskItem);
    }
});
