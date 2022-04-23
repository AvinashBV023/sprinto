import ToDo from './ToDo'
 
 
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