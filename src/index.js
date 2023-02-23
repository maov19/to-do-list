import './style.css';

const displayList = document.getElementById('todolist');

const toDoList = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 0,
  },
];

function showList() {
  toDoList.sort((a, b) => a.index - b.index);

  Object.keys(toDoList).forEach((item) => {
    displayList.innerHTML += `
  <div class="task ${toDoList[item].description}">
  <input class="taskstatus" type="checkbox">
  <p class="taskdescription">${toDoList[item].description}</p>
  <span class="icon"></span>
  </div>
  <hr width="100%">
  `;
  });
}
showList();
