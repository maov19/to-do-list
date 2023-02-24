/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */

export const setStatus = (event) => {
  const click = event.target.closest('.check');
  if (!click) return;

  const status = parseInt(click.getAttribute('status'), 10);
  const task = JSON.parse(localStorage.getItem('storedTask')) || [];
  const findStatus = task.find((todo) => todo.index === status);
  findStatus.completed = !findStatus.completed;
  localStorage.setItem('storedTask', JSON.stringify(task));
};

export const clearDone = () => {
  const localTasks = JSON.parse(localStorage.getItem('storedTask')) || [];
  const toBeDone = localTasks.filter((taskList) => !taskList.completed);
  localTasks.length = 0;
  let i = 1;
  toBeDone.forEach((element) => {
    element.index = i;
    i += 1;
  });
  localTasks.push(...toBeDone);
  localStorage.setItem('storedTask', JSON.stringify(localTasks));
};