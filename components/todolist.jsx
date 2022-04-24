import { useState, useEffect } from 'react'
import ToDo from './todo'
import data from '../src/data.json'
import Editform from './editform'
import Addtodo from './addtodo'
 
const ToDoList = () => {
  const [ showform, setShow ] = useState(false);
  const [ add, setAdd ] = useState(false);
  const [todos, setTodos] = useState(data);
  const [ currentTodo, setCurrentTodo ] = useState(null);
  useEffect(() => {
    let  savedTodos;
    if (typeof window !== 'undefined') savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos(data);
    }
  }, []);
  const toggleEditform = () => {
    setShow(!showform);
  };
  const toggleAdd = () => {
    setAdd(!add);
  };
  const currentTodotoedit = (crnt) => {
    setCurrentTodo(crnt);
    toggleEditform();
  };
  const addTodo = (addrow) => {
    const addrowid = todos[todos.length - 1].id + 1;
    addrow.id = addrowid;
    setAdd(false);
    setTodos([...todos, addrow]);
    localStorage.setItem("todos", JSON.stringify([...todos, addrow]));
  };
  const deleteTodo = (id) => {
    console.log(id, 'id');
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(removeItem));
    setTodos(removeItem);
  };
  const handleUpdateTodo = (id, updatedTodo) => {
    localStorage.clear();
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setShow(false);
    localStorage.setItem("todos", JSON.stringify(updatedItem));
    setTodos(updatedItem);
  };
   return (
       <div>
          <button onClick = {() => toggleAdd(true)}>
            Add todo
          </button>
          {
            add ? (
              <div className="form_popup">
                <Addtodo addTodo={addTodo} toggleAdd={toggleAdd} />
              </div>
            ): null
          }
          {todos.map(todo => {
              return (
                <ToDo key={todo.id} todo={todo} currentTodotoedit={currentTodotoedit} />
              )
          })}
          <div>
          {
            showform ? (
              <div className="form_popup">
                <Editform currentTodo={currentTodo} toggleEditform={toggleEditform} deleteTodo={deleteTodo} handleUpdateTodo={handleUpdateTodo} />
              </div>
            ): null
          }
          </div>
          <style jsx>
          {`
            .todos{
              display:flex;
              justify-content:space-evenly;
              align-items: center;
              margin: 50px 0px;
            }
            .profile{
              width: 35px;
              height: 35px;
            }
            .form_popup {
              position: fixed;
              background: rgb(191 186 186 / 70%);
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
            }

          `}
        </style>
       </div>
   );

};

 
export default ToDoList;