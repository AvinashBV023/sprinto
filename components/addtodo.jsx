import { useState } from 'react'

const Addtodo = ({addTodo, toggleAdd}) => {
  const [ task, setTask ] = useState(null);
  const [ date, setDate ] = useState(null);
  const [ priority, setPriority ] = useState(null);

  const priorityHandler = (e) => {
    console.log(e.target.value);
    setPriority(e.target.value);
  };

  // const handleUpdateTodo = (id, updatedTodo) => {
  //   const updatedItem = todos.map((todo) => {
  //     return todo.id === id ? updatedTodo : todo;
  //   });
  //   setIsEditing(false);
  //   saveTodos(updatedItem);
  // };
  const handleEditInputChange = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
    // setShow(true);
  };
  const handleEditdateChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    // setShow(true);
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // toggleEditform();
    // console.log(priority, date, task);
    // setShow(true);
    const todoobj = {};
    if (priority) todoobj.priority = priority;
    if (date) todoobj.date = date;
    if (task) todoobj.task = task;
    // console.log(currentTodo.id, todoobj, 'currentTodo.id, todoobj');
    addTodo(todoobj);
  };

  return (
    <section className='form_sec'>
      <form>
        <h2>Add Todo</h2>
        <label htmlFor="editTodo">Add todo: </label>
        <input
          name="eaddTodo"
          type="text"
          placeholder="add todo"
          value={task}
          onChange={handleEditInputChange}
        />
        <select onChange={priorityHandler}>
          Priority
          <option value='high'>
            High
          </option>
          <option value='medium'>
            Medium
          </option>
          <option value='low'>
            Low
          </option>
        </select>
        <div>
          <label for="date">Due date</label>
          <input onChange={handleEditdateChange} value={date} type="date" id="date" name="date" />
        </div>
        <button type="submit" onClick={(e) => handleEditFormSubmit(e)}>Add</button>
        <button onClick={() => toggleAdd()}>Cancel</button>
      </form>
      <style jsx>
          {`
            .form_sec {
              width: 900px;
              margin: 100px auto;
            }
            .form_sec form {
              background-color: #fafafa;
              padding: 50px;            
            }
          `}
        </style>
      </section>
  );
};

export default Addtodo;