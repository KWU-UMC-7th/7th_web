document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskValue;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '완료';
        completeBtn.addEventListener('click', function () {
            completeTask(taskItem);
        });

        taskItem.appendChild(completeBtn);
        document.getElementById('todoTasks').appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    document.getElementById('completedTasks').appendChild(taskItem);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(deleteBtn);
    taskItem.querySelector('button').remove(); 
}