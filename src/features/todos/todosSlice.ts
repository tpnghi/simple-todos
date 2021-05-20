import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoValue {
  key: number;
  text: string;
  isCompleted: boolean;
}
export interface TodosState {
  value: TodoValue[];
}

const initialState: TodosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push({
        key: Date.now(),
        text: action.payload,
        isCompleted: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((todo) =>
        todo.key === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
