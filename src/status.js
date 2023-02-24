// Project requirements
// DONE - Add a new JavaScript file and import it as a module:
// DONE - it will contain methods related to the status updates (completed: true / false).
// DONE - Add event listener to the checkbox (change).
// DONE - Update items object's value for completed key upon user actions.
// DONE - Implement a function for the "Clear all completed" button (use filter() method).
// DONE - Store the updated array of items in local storage, so the user gets the correct list of values after the page reloads (which means that any changes made to the list should be preserved).


/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */

export const clearing = (e) => {
    const click = e.target.closest('.check');
    if (!click) return;
  
    const dataT = parseInt(click.getAttribute('data-set'), 10);
    const task = JSON.parse(localStorage.getItem('storedTask')) || [];
    const find = task.find((todo) => todo.index === dataT);
    find.completed = !find.completed;
    localStorage.setItem('storedTask', JSON.stringify(task));
  };
  
  export const clear = () => {
    const set = JSON.parse(localStorage.getItem('storedTask')) || [];
    const notDone = set.filter((taskList) => !taskList.completed);
    set.length = 0;
    let i = 1;
    notDone.forEach((element) => {
      element.index = i;
      i += 1;
    });
    set.push(...notDone);
    localStorage.setItem('storedTask', JSON.stringify(set));
  };