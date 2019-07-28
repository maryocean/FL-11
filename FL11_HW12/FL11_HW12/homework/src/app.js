let todoItems = JSON.parse(localStorage.getItem('todoItems'));

let addBtn = document.getElementById('add-btn');
let saveCancelBtn = document.getElementsByClassName('cancel-btn')[0];
let modifyCancelBtn = document.getElementsByClassName('cancel-btn')[1];
let saveBtn = document.getElementById('save-btn');
let addTaskInput = document.getElementById('add-task-input');
let modifyTaskInput = document.getElementById('modify-task-input');

let todoNav = document.getElementsByClassName('todo-nav');
let addTask = document.getElementsByClassName('add-task');
let modifyTask = document.getElementsByClassName('modify-task');

let todoItemTemplate = document.getElementById('todo-item-template');
let todoItemList = document.getElementsByClassName('todo-item-list');

addBtn.addEventListener('click', addItemRoute);
saveCancelBtn.addEventListener('click', cancel);
modifyCancelBtn.addEventListener('click', cancel);
saveBtn.addEventListener('click', save);
let itemId = findLatestId() - 1;

window.addEventListener('hashchange', function () {
    console.log(window.location.hash);
});

(function displayAllFromStorage() {
    todoItems.forEach(item => {
        let todoItem = todoItemTemplate.cloneNode(true);
        todoItem.classList.remove('hidden');
        todoItem.getElementsByTagName('h1')[0].innerHTML = item.description;
        todoItem.getElementsByTagName('p')[0].innerHTML = item.id;
        // todoItem.getElementsByClassName('is-done')[0].innerHTML = item.isDone;
        if (item.isDone === true) {
            checkItem(todoItem);
        }
        todoItemList[0].appendChild(todoItem);
    });
}());

(function hideDefault() {
    window.location.hash = '#home';
    addTask[0].classList.add('hidden');
    modifyTask[0].classList.add('hidden');
}());

function addItemRoute() {
    showAdd();
    window.location.hash = '#add/' + itemId;
}

function save() {
    itemId++;
    let description = addTaskInput.value;
    let todoItem = todoItemTemplate.cloneNode(true);
    todoItem.classList.remove('hidden');
    todoItem.getElementsByTagName('h1')[0].innerHTML = description;
    todoItem.getElementsByTagName('p')[0].innerHTML = itemId;
    todoItemList[0].appendChild(todoItem);

    todoItems.push({
        isDone: false,
        id: itemId,
        description: description
    })
    storeTodoItemsToLocal();
}

function showAdd() {
    addTask[0].classList.remove('hidden');
    todoNav[0].classList.add('hidden');
}

function cancel() {
    window.location.hash = '#home';
    todoNav[0].classList.remove('hidden');
    addTask[0].classList.add('hidden');
    modifyTask[0].classList.add('hidden');
}

function check(event) {
    checkItem(event.target.parentNode);
}

function uncheck(event) {
    uncheckItem(event.target.parentNode);
}

function checkItem(parent) {
    parent.getElementsByClassName('task-text')[0].classList.add('done-item');
    parent.getElementsByClassName('done-image')[0].classList.remove('hidden');
    parent.getElementsByClassName('todo-image')[0].classList.add('hidden');
}

function uncheckItem(parent) {
    parent.getElementsByClassName('task-text')[0].classList.remove('done-item');
    parent.getElementsByClassName('done-image')[0].classList.add('hidden');
    parent.getElementsByClassName('todo-image')[0].classList.remove('hidden');
}

function deleteItem(event) {
    let parent = event.target.parentNode
    let id = parent.getElementsByTagName('p')[0].innerHTML;
    let itemIndex = todoItems.findIndex(item => '' + item.id === id);
    todoItems.splice(itemIndex, 1);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    parent.parentNode.removeChild(parent);
}

function storeTodoItemsToLocal() {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function findLatestId() {
    let firstElId = todoItems[0];
    if (firstElId === undefined) {
        return 1;
    }
    return todoItems.reduce((max, item) => item.id > max ? item.id : max,
        todoItems[0].id);
}
