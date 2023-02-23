const displayTasks = document.querySelector('#task_list');
const form = document.getElementById('form');
const newTask = document.querySelector('#add_task');
const addButton = document.querySelector('.add-to-list');
const deleteBtn = document.querySelector('.delete');

let taskList = [];

function showTasks() {
  displayTasks.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('storedTask')) || [];
  taskList.forEach((item) => {
    const comp = item.completed ? 'checked' : '';
    const task = document.createElement('div');
    displayTasks.appendChild(task);
    task.classList.add('task');
    task.innerHTML = `
    <input type="checkbox" class="check" ${comp} id="check" data-set="${item.index}">
    <input class="edit" type="text" value="${item.name}">
    <div>
    <i id="${item.index}" class="fa-solid fa-trash-can"></i>
    </div>
    `;

    const secondTaskList = task.children[1];
    secondTaskList.addEventListener('change', () => {
      const taskData = document.querySelector('#task_list');
      const taskArray = Array.from(taskData.children);
      const index = taskArray.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('storedTask'));
      taskLocal[index].name = secondTaskList.value;
      localStorage.setItem('storedTask', JSON.stringify(taskLocal));
    });
  });
};
showTasks();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!newTask) {
    return;
  } else {
  taskList = JSON.parse(localStorage.getItem('storedTask')) || [];
}

  const obj = new Object;
    obj.name = newTask.value;
    obj.index = taskList.length + 1;
    obj.completed = false;
  
  taskList.push(obj);
  localStorage.setItem('storedTask', JSON.stringify(taskList));

  newTask.value = '';
  showTasks();
});

