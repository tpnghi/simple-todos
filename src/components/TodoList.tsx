import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import Todo from "./Todo";
import { toggleTodo } from "../features/todos/todosSlice";
function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.value);
  const dispatch = useDispatch();
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo) => (
          <Todo
            key={todo.key}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onClick={() => {
              dispatch(toggleTodo(todo.key));
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
