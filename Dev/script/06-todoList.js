let todoList = [];
renderTodoList();

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value;
  const dateElement = document.querySelector('.js-due-date-input');
  const todoDate = dateElement.value;
  todoList.push({name:todoName, date:todoDate});
  inputElement.value = ''; // clear the input field after adding a new todo
  renderTodoList();
}

const addButton = document.querySelector('.add-todo-button');
addButton.addEventListener('click', ()=>{
  addTodo();
  console.log(todoList);
}); 

function renderTodoList() {
  let todoHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const currentObject = todoList[i];
    const html = `
      <div>${i+1}.${currentObject.name}</div>
      <div>${currentObject.date}</div>
      <button class="delete-todo-button">Delete</button>`;
    todoHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoHTML;

  document.querySelectorAll('.delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
  });
}

