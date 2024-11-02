import "./style.scss";
import { useDispatch } from "react-redux";
import { changeTodoStatus, removeFromTodos } from "../../Store/slice";
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs";

const Todo = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeFromTodos(todo.id));
  };

  return (
    <div className="todo">
        <div className="text">
            <span className={`todo.status === "complete" && "incomplete"`}>
                {todo.text}
            </span>
        </div>
        <div className="edit">
            <div onClick={() => handleEdit(todo.id)}>
            <BsPencil />
            </div>
            <div onClick={handleStatus}>
            <BsCheckCircle />
            </div>
            <div onClick={handleDelete}>
            <BsTrash />
            </div>
        </div>
    </div>
  )
};

export default Todo;