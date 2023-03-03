"use strict";
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status */ "./src/status.js");


const displayTasks = document.querySelector('#task_list');
const form = document.getElementById('form');
const newTask = document.querySelector('#add_task');
const deleteBtn = document.querySelector('.delete');

let taskList = [];

function showTasks() {
  displayTasks.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('storedTask')) || [];
  taskList.forEach((item) => {
    const isCompleted = item.completed ? 'checked' : '';
    const task = document.createElement('div');
    displayTasks.appendChild(task);
    task.classList.add('task');
    task.innerHTML = `
    <input type="checkbox" class="check" ${isCompleted} id="check" status="${item.index}">
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

displayTasks.addEventListener('click', _status__WEBPACK_IMPORTED_MODULE_0__.setStatus);
deleteBtn.addEventListener('click', () => {
  (0,_status__WEBPACK_IMPORTED_MODULE_0__.clearDone)();
  showTasks();
});


/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDone": () => (/* binding */ clearDone),
/* harmony export */   "setStatus": () => (/* binding */ setStatus)
/* harmony export */ });
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */

const setStatus = (event) => {
  const click = event.target.closest('.check');
  if (!click) return;

  const status = parseInt(click.getAttribute('status'), 10);
  const task = JSON.parse(localStorage.getItem('storedTask')) || [];
  const findStatus = task.find((todo) => todo.index === status);
  findStatus.completed = !findStatus.completed;
  localStorage.setItem('storedTask', JSON.stringify(task));
};

const clearDone = () => {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYSxxQkFBcUIsV0FBVztBQUN4Riw2Q0FBNkMsaUJBQWlCO0FBQzlEO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHVDQUF1Qyw4Q0FBUztBQUNoRDtBQUNBLEVBQUUsa0RBQVM7QUFDWDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL3NyYy9zdGF0dXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0U3RhdHVzLCBjbGVhckRvbmUgfSBmcm9tICcuL3N0YXR1cyc7XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19saXN0Jyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZF90YXNrJyk7XHJcbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuXHJcbmxldCB0YXNrTGlzdCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Rhc2tzKCkge1xyXG4gIGRpc3BsYXlUYXNrcy5pbm5lckhUTUwgPSAnJztcclxuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2snKSkgfHwgW107XHJcbiAgdGFza0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaXNDb21wbGV0ZWQgPSBpdGVtLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnO1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGlzcGxheVRhc2tzLmFwcGVuZENoaWxkKHRhc2spO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICB0YXNrLmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrXCIgJHtpc0NvbXBsZXRlZH0gaWQ9XCJjaGVja1wiIHN0YXR1cz1cIiR7aXRlbS5pbmRleH1cIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImVkaXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtpdGVtLmRlc2NyaXB0aW9ufVwiPlxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgaWQ9XCIke2l0ZW0uaW5kZXh9XCIgY2xhc3M9XCJ0ZXN0XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kVGFza0xpc3QgPSB0YXNrLmNoaWxkcmVuWzFdO1xyXG4gICAgc2Vjb25kVGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2xpc3QnKTtcclxuICAgICAgY29uc3QgdGFza0FycmF5ID0gQXJyYXkuZnJvbSh0YXNrRGF0YS5jaGlsZHJlbik7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGFza0FycmF5LmluZGV4T2YodGFzayk7XHJcbiAgICAgIGNvbnN0IHRhc2tMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2snKSk7XHJcbiAgICAgIHRhc2tMb2NhbFtpbmRleF0uZGVzY3JpcHRpb24gPSBzZWNvbmRUYXNrTGlzdC52YWx1ZTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2snLCBKU09OLnN0cmluZ2lmeSh0YXNrTG9jYWwpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbnNob3dUYXNrcygpO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmICghbmV3VGFzaykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2snKSkgfHwgW107XHJcblxyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIGRlc2NyaXB0aW9uOiBuZXdUYXNrLnZhbHVlLFxyXG4gICAgaW5kZXg6IHRhc2tMaXN0Lmxlbmd0aCArIDEsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcbiAgdGFza0xpc3QucHVzaChvYmopO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuXHJcbiAgbmV3VGFzay52YWx1ZSA9ICcnO1xyXG4gIHNob3dUYXNrcygpO1xyXG59KTtcclxuXHJcbmNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHJlbW92ZUxpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGUpID0+IGUuaW5kZXggIT09IGluZGV4KTtcclxuICB0YXNrTGlzdC5sZW5ndGggPSAwO1xyXG4gIGxldCBpID0gMTtcclxuICByZW1vdmVMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgIGUuaW5kZXggPSBpO1xyXG4gICAgaSArPSAxO1xyXG4gIH0pO1xyXG4gIHRhc2tMaXN0LnB1c2goLi4ucmVtb3ZlTGlzdCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2snLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xyXG4gIHNob3dUYXNrcygpO1xyXG59O1xyXG5cclxuZGlzcGxheVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rlc3QnKSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpLCAxMCk7XHJcbiAgICByZW1vdmUoaW5kZXgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kaXNwbGF5VGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRTdGF0dXMpO1xyXG5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xlYXJEb25lKCk7XHJcbiAgc2hvd1Rhc2tzKCk7XHJcbn0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTdGF0dXMgPSAoZXZlbnQpID0+IHtcclxuICBjb25zdCBjbGljayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2hlY2snKTtcclxuICBpZiAoIWNsaWNrKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHN0YXR1cyA9IHBhcnNlSW50KGNsaWNrLmdldEF0dHJpYnV0ZSgnc3RhdHVzJyksIDEwKTtcclxuICBjb25zdCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFzaycpKSB8fCBbXTtcclxuICBjb25zdCBmaW5kU3RhdHVzID0gdGFzay5maW5kKCh0b2RvKSA9PiB0b2RvLmluZGV4ID09PSBzdGF0dXMpO1xyXG4gIGZpbmRTdGF0dXMuY29tcGxldGVkID0gIWZpbmRTdGF0dXMuY29tcGxldGVkO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrJywgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyRG9uZSA9ICgpID0+IHtcclxuICBjb25zdCBsb2NhbFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFzaycpKSB8fCBbXTtcclxuICBjb25zdCB0b0JlRG9uZSA9IGxvY2FsVGFza3MuZmlsdGVyKCh0YXNrTGlzdCkgPT4gIXRhc2tMaXN0LmNvbXBsZXRlZCk7XHJcbiAgbG9jYWxUYXNrcy5sZW5ndGggPSAwO1xyXG4gIGxldCBpID0gMTtcclxuICB0b0JlRG9uZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmluZGV4ID0gaTtcclxuICAgIGkgKz0gMTtcclxuICB9KTtcclxuICBsb2NhbFRhc2tzLnB1c2goLi4udG9CZURvbmUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrJywgSlNPTi5zdHJpbmdpZnkobG9jYWxUYXNrcykpO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==