// let rootNode = document.getElementById('root');
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoList = document.getElementById('todo-list');
let todoItemTemplate = document.getElementById('todo-item-template');
let notification = document.getElementById('notification');
let numberOfItems = 0;
const maxNumberOfItems = 10;
const enterKey = 13;

// init elements listeners
addBtn.addEventListener('click', addItem);
todoInput.addEventListener('keyup', function () {
    if (todoInput.value.length === 0) {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }
    if (event.keyCode === enterKey) {
        addBtn.click();
    }
});

function addItem() {
    if (numberOfItems < maxNumberOfItems) {
        let itemName = todoInput.value;
        let todoItem = createTodoItem(itemName);
        todoList.appendChild(todoItem);
        numberOfItems++;
    } else {
        showNotification(true);
    }
}

function createTodoItem(itemName) {
    let todoItem = todoItemTemplate.cloneNode(true);
    todoItem.classList.remove('hidden');
    todoItem.removeAttribute('id');
    todoItem.getElementsByTagName('p')[0].innerHTML = itemName;
    return todoItem;
}

function checkItem(event) {
    let checkbox = event.target;
    checkbox.classList.add('checked');
}

function deleteItem(event) {
    let todoItem = event.target.parentNode;
    todoList.removeChild(todoItem);
    if (numberOfItems === maxNumberOfItems) {
        showNotification(false);
    }
    numberOfItems--;
}

function editItem(event) {
    let todoItem = event.target.parentNode;
    let itemName = todoItem.getElementsByTagName('p')[0].innerHTML;
    let editInput = todoItem.getElementsByTagName('input')[0];
    editInput.value = itemName;

    todoItem.classList.add('edit');
}

function saveItem(event) {
    let todoItem = event.target.parentNode;
    let itemName = todoItem.getElementsByTagName('input')[0].value;
    todoItem.getElementsByTagName('p')[0].innerHTML = itemName;
    todoItem.classList.remove('edit');
}


function showNotification(value) {
    if (value) {
        todoInput.disabled = true;
        addBtn.disabled = true;
        notification.classList.remove('hidden');
    } else {
        todoInput.disabled = false;
        addBtn.disabled = false;
        notification.classList.add('hidden');
    }
}

let dragItem;

function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move'

    let target = event.target;

    if (target && target !== dragItem && target.nodeName === 'LI') {
        if (dragItem === target.nextElementSibling) {
            todoList.insertBefore(dragItem, target);
        } else {
            todoList.insertBefore(dragItem, target.nextElementSibling);
        }
    }
}

function dragStart(event) {
    event.dataTransfer.effectAllowed = 'move';

    dragItem = event.target;
    dragItem.classList.add('drag');
}

function dragEnd(event) {
    event.preventDefault();
    dragItem.classList.remove('drag');
}
