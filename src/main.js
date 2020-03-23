import * as state from './state.js';

const myTodos = [
    'Stroke the cat',
    'Pet the dog',
    'Feed the chickens'
];

const todos = document.querySelector('#todos');
const newItem = document.querySelector('#input');
const newItemButton = document.querySelector('#add');
const deleteItemButton = document.querySelector('#delete')

todos.innerHTML = myTodos.map((x) => `<li>${x}</li>`).join('\n');

newItemButton.addEventListener('click', () => {
    myTodos.push(newItem.value);
    console.log(newItem);
    todos.innerHTML = myTodos.map((x) => `<li>${x}</li>`).join('\n');
});

deleteItemButton.addEventListener('click', () => {
    myTodos.pop();
    todos.innerHTML = myTodos.map((x) => `<li>${x}</li>`).join('\n');
});
