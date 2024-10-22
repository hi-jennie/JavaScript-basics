const todoList = [];
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

function renderTodoList() {
  let todoHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const currentObject = todoList[i];
    const html = `
      <div>${i+1}.${currentObject.name}</div>
      <div>${currentObject.date}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>`;
    todoHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoHTML;
}