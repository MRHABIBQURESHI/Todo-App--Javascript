let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        tasks.push(taskInput.value);
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteBtn = document.createElement('span');

        span.innerText = task;
        deleteBtn.innerHTML = '&times;';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(index));

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});
