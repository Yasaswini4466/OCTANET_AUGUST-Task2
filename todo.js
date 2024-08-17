let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push({ name: taskInput, completed: false });
        document.getElementById('taskInput').value = '';
        renderTasks();
    }
}

function renderTasks(filter = 'all') {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
    }).forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.innerHTML = `
            <span>${task.name}</span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleComplete(${index})">
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks(filter) {
    renderTasks(filter);
}

function redirectToHome() {
    location.href = 'index.html';
    return false;
}
