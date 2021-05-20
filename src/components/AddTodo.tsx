import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleClick = () => {
    if (!(text.trim() === "")) {
      dispatch(addTodo(text));
    }
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddTodo;
