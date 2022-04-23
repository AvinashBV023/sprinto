import { useState } from 'react'

const ToDo = ({todo}) => {
  const [ showform, setShow ] = useState(false);
  const priorityHandler = (e) => {
    console.log(e.target.value);
  };
  const openEditform = () => {
    console.log('open form');
    setShow(true);
  }
  return (
      <section className="todos">
        <p>
          {todo.task}
        </p>
        <select onChange={priorityHandler}>
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
          <input type="date" id="birthday" name="birthday" />
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
        <button onClick={() => openEditform()}>
          ation
        </button>
        <style jsx>
          {`
            @media all and (min-width:900px){
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
            }

          `}
        </style>

      </section>
  );
};

export default ToDo;