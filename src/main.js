// DONE - Remove all hardcoded items from the tasks array.
// DONE - Create a new JavaScript file for the new functionality.

export default class Task {
    constructor() {
      this.tasks = [];
    }
  
    addTask(obj) {
      this.tasks = JSON.parse(localStorage.getItem('to-dos'));
      if (this.tasks === null) {
        this.tasks = [];
        localStorage.setItem('to-dos', this.tasks);
        this.tasks.push(obj);
        localStorage.setItem('to-dos', JSON.stringify(this.tasks));
        document.querySelector('input').reset();
      } else {
        this.tasks.push(obj);
        localStorage.setItem('to-dos', JSON.stringify(this.tasks));
        document.querySelector('to-dos').reset();
      }
    }
  
    removeBook(id) {
      this.tasks = JSON.parse(localStorage.getItem('data'));
      this.tasks = this.tasks.filter((i) => i?.id !== id);
      localStorage.setItem('data', JSON.stringify(this.tasks));
      window.location.reload();
    }
  }
  
  // Implement a function for adding a new task (add a new element to the array).
    // By default new tasks should have the property completed set to false and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task should equal to 5).
    // All changes to the To Do List should be saved in local storage.
  
  
  
  // Implement a function for deleting a task (remove an element from the array).
    // Deleting a task should update all remaining items' indexes, so they represent the current list order and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) should set to 1)..
    // All changes to the To Do List should be saved in local storage.
  
  // Implement a function for editing task descriptions.
  
  
  
  
  
  
  