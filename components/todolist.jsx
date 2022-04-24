import { useState, useEffect } from 'react'
import ToDo from './todo'
import data from '../src/data.json'
import Editform from './editform'

 
const ToDoList = () => {
  const [ showform, setShow ] = useState(false);
  const [todos, setTodos] = useState(data);
  const [ currentTodo, setCurrentTodo ] = useState(null);
  useEffect(() => {
    console.log('i run');
    let  savedTodos;
    if (typeof window !== 'undefined') savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      console.log(savedTodos, 'savedTodos123');
      setTodos(JSON.parse(savedTodos));
    } else {
      console.log(data, 'data123');
      setTodos(data);
    }
  }, []);
  const toggleEditform = () => {
    setShow(!showform);
  };
  const currentTodotoedit = (crnt) => {
    setCurrentTodo(crnt);
    console.log(crnt, 'crnt33');
    toggleEditform();
  };
  const handleUpdateTodo = (id, updatedTodo) => {
    localStorage.clear();
    console.log(todos, 'todo456');
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    console.log(updatedItem, 'updatedItem45565666');
    setShow(false);
    localStorage.setItem("todos", JSON.stringify(updatedItem));
    console.log(updatedItem, 'updatedItem099');
    setTodos(updatedItem);
  };
   return (
       <div>
          {todos.map(todo => {
              return (
                <ToDo key={todo.id} todo={todo} currentTodotoedit={currentTodotoedit} />
              )
          })}
          <div>
          {
            showform ? (
              <div className="form_popup">
                <Editform currentTodo={currentTodo} toggleEditform={toggleEditform} handleUpdateTodo={handleUpdateTodo} />
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