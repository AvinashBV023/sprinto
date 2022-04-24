
const ToDo = ({todo, currentTodotoedit }) => {

  return (
      <section className="todos">
        <p>
          {todo.task}
        </p>
        <select>
          Priority
          <option value={'high'}>
            High
          </option>
          <option value={'medium'}>
            Medium
          </option>
          <option value={'low'}>
            Low
          </option>
        </select>
        <div>
          <label for="birthday">Due date</label>
          <input type="date" value={todo.date} id="birthday" name="birthday" />
        </div>
        <div className="createdby">
          <p>
            created by
          </p>
          <img className="profile" src="https://rtalk.tv/website/team/default.png" alt ="user_name img" />

        </div>
        <div className="assignedto">
          <p>
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
            .profile{
              width: 35px;
              height: 35px;
            }

          `}
        </style>

      </section>
  );
};

export default ToDo;