document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const tasksToDo = document.getElementById('tasksToDo');
    const tasksDone = document.getElementById('tasksDone');

    // 확인용 로그 추가
    console.log('JavaScript 로드 완료');

    // Function to add a new task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        console.log('Key pressed:', event.key); // 키 입력 확인
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim(); // Remove whitespace
            console.log('Entered task:', taskText); // 입력된 텍스트 확인
            if (taskText !== '') {
                addTask(taskText);  // Call the function to add the task
                taskInput.value = ''; // Clear the input field
            }
            taskInput.focus(); // Set focus back to the input field
        }
    });

    // Function to add a task to the "Tasks To Do" list
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const doneButton = document.createElement('button');
        doneButton.textContent = '완료';
        doneButton.addEventListener('click', () => markAsDone(li, task));

        li.appendChild(doneButton);
        tasksToDo.appendChild(li);

        console.log('Task added to list:', task); // 작업 추가 확인
    }

    // Function to move a task to the "Tasks Done" list
    function markAsDone(taskElement, task) {
        tasksToDo.removeChild(taskElement);

        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(li));

        li.appendChild(deleteButton);
        tasksDone.appendChild(li);

        console.log('Task marked as done:', task); // 완료된 작업 확인
    }

    // Function to delete a task from the "Tasks Done" list
    function deleteTask(taskElement) {
        tasksDone.removeChild(taskElement);
        console.log('Task deleted');
    }
});
