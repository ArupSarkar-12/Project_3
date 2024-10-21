import { useRef } from "react"; //useRef method
import { MdAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElements = useRef();
  const dueDateElements = useRef();

  const handleAddButtonClick = () => {
    const todoName = todoNameElements.current.value;
    const dueDate = dueDateElements.current.value;
    todoNameElements.current.value = "";
    dueDateElements.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElements}
            placeholder="Enter Todo here"
          ></input>
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElements}></input>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success"
            onClick={handleAddButtonClick}
          >
            <MdAddToQueue />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
