const taskList = document.getElementById('taskList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button onclick="toggleComplete(this)"><i class="fa-solid fa-check" style="color: #74C0FC;"></i></button>
            <button onclick="editTask(this)"><i class="fa-regular fa-pen-to-square"></i></button>
            <button onclick="deleteTask(this)"><i class="fa-solid fa-x" style="color: #de1231;"></i></button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function toggleComplete(button) {
    const taskItem = button.closest('.task-item');
    taskItem.classList.toggle('completed');
}

function editTask(button) {
    const taskItem = button.closest('.task-item');
    const taskText = taskItem.querySelector('span');

    const newTaskText = prompt('Edit your task:', taskText.textContent);

    if (newTaskText !== null) {
        taskText.textContent = newTaskText.trim() || taskText.textContent;
    }
}

function deleteTask(button) {
    const taskItem = button.closest('.task-item');
    taskList.removeChild(taskItem);
}