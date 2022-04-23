import ToDo from './todo'
 
 
const ToDoList = ({toDoList}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo key={todo.id} todo={todo} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;