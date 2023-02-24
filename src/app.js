import { clearing, clear } from './status';

const displayTasks = document.querySelector('#task_list');
const form = document.getElementById('form');
const newTask = document.querySelector('#add_task');
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
    <input class="edit" type="text" value="${item.description}">
    <div>
    <div id="${item.index}" class="test"></div>
    </div>
    `;

    const secondTaskList = task.children[1];
    secondTaskList.addEventListener('change', () => {
      const taskData = document.querySelector('#task_list');
      const taskArray = Array.from(taskData.children);
      const index = taskArray.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('storedTask'));
      taskLocal[index].description = secondTaskList.value;
      localStorage.setItem('storedTask', JSON.stringify(taskLocal));
    });
  });
}
showTasks();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!newTask) {
    return;
  }
  taskList = JSON.parse(localStorage.getItem('storedTask')) || [];

  const obj = {
    description: newTask.value,
    index: taskList.length + 1,
    completed: false,
  };
  taskList.push(obj);
  localStorage.setItem('storedTask', JSON.stringify(taskList));

  newTask.value = '';
  showTasks();
});

const remove = (index) => {
  const removeList = taskList.filter((e) => e.index !== index);
  taskList.length = 0;
  let i = 1;
  removeList.forEach((e) => {
    e.index = i;
    i += 1;
  });
  taskList.push(...removeList);
  localStorage.setItem('storedTask', JSON.stringify(taskList));
  showTasks();
};

displayTasks.addEventListener('click', (event) => {
  if (event.target.classList.contains('test')) {
    const index = parseInt(event.target.getAttribute('id'), 10);
    remove(index);
  }
});

displayTasks.addEventListener('click', clearing);
deleteBtn.addEventListener('click', () => {
  clear();
  showTasks();
});


