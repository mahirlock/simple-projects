// *****SELECT ITEMS*****
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryItem = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// *****EDIT OPTION*****
let editElement;
let editFlag = false;
let editID = "";

// ******EVENT LISTENERS******
// submit form
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = groceryItem.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag) {
        createListItem(id, value);
        // display alert
        displayAlert('Item added to the list', 'success');
        // show container
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    }
    else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('Value changed', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }
    else {
        displayAlert('Please enter value', 'danger');
    }
})

// clear items
clearBtn.addEventListener('click', function() {
    const items = document.querySelectorAll('.grocery-item');
    
    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
})

// load items
window.addEventListener('DOMContentLoaded', function() {
    let items = getLocalStorage();
    
    if(items.length > 0) {
        items.forEach(function(item) {
            createListItem(item.id, item.value);
        })
        container.classList.add('show-container');
    }
})

// *****FUNCTIONS
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    groceryItem.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'Edit';
}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('item is removed', 'danger');
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

// set back to default
function setBackToDefault() {
    groceryItem.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// *****LOCAL STORAGE*****
function addToLocalStorage(id, value) {
    const grocery = {id: id, value: value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item) {
        if(item.id !== id) {
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    
    items = items.map(function(item) {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

// *****SETUP ITEMS*****
function createListItem (id, value) {
    const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML =`<p class="title">${value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`

        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        // append child
        list.appendChild(element);
}