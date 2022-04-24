const ToDo = ({todo, currentTodotoedit }) => {

  return (
      <div className="todos">
        <p className="task">
          {todo.task}
        </p>
        <select value={todo.priority}>
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
          <label for="date" className="date">Due date</label>
          <input type="date" value={todo.date} id="date" name="date" />
        </div>
        <div className="createdby">
          <p className="para">
            created by
          </p>
          <img className="profile" src="https://rtalk.tv/website/team/default.png" alt ="user_name img" />
        </div>
        <div className="assignedto">
          <p className="para">
            Assigned to
          </p>
          <img className="profile" src="https://rtalk.tv/website/team/default.png" alt ="user_name img" />
        </div>
        <button onClick={() => {currentTodotoedit(todo)}}>
          Edit
        </button>
        <style jsx>
          {`
            .todos{
              display:flex;
              justify-content:space-evenly;
              align-items: center;
              margin: 50px 0px;
            }
            .createdby, .assignedto {
              text-align: center;
            }
            .task {
              width: 30%;
              max-width: 30%;
            }
            .profile{
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
            .para {
              margin: 0px 0px 5px 
            }
            .date {
              margin-right: 10px;
            }

          `}
        </style>
      </div>
  );
};

export default ToDo;