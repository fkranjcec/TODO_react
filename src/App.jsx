import { VisibilityToolbar, AddTodoForm, TodoList, Header, Footer } from './components';
import { VISIBILITY_TYPES } from './const';
import './App.css';
import { useEffect, useState } from 'react';


export default function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [visibility, setVisibility] = useState(VISIBILITY_TYPES.ALL);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const getVisibleTodos = () => {
    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter(todo => todo.completed);
    }

    return todos.filter(todo => !todo.completed);
  };

  const handleAddTodo = value => {
    const newTodo = { id: Math.random(), text: value, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleToggleTodo = id => {
    const newTodos = todos.map(item => item.id === id ? {...item, completed: !item.completed} : item);
    setTodos(newTodos);
  };

  const handleRemoveTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);

  };

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const handleVisibilityChange = visibility => {
    
    setVisibility(visibility);

  };

  return(
      <div className="app">
       <Header/>
       <main>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={handleVisibilityChange}
        />
        <div className="todo-container">
          <AddTodoForm addTodo={handleAddTodo} />
          <TodoList
            todos={getVisibleTodos()}
            removeTodo={handleRemoveTodo}
            toggleTodo={handleToggleTodo}
          />
        </div>
        {todos.filter(todo => !!todo.completed).length > 0 && (
          <span onClick={handleRemoveCompleted} className="btn-clear-all">
            Clear completed tasks
          </span>
        )}
        <Footer totalNumOfItems={todos.length}/>
        </main>
      </div>
  );
}
