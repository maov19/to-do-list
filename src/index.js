import './style.css';

const displayList = document.getElementById('todolist');

const toDoList = [
  {
    description: 'wash the dishes',
    completed: false,
    index: null,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: null,
  }
]

for (const item in toDoList) {
  displayList.innerHTML += `
    <div class="task ${toDoList[item].description}">
    <input class="taskstatus" type="checkbox">
    <p class="taskdescription">${toDoList[item].description}</p>
    <span class="icon"></span>
    </div>
    <hr width="100%">
    `
}
