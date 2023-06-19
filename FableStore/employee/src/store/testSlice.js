import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                complited: false,
            });
        },
        removeTodo(state, action){

        },
        toggleTodoStore(state, action){

        },
    }
});

export const {addTodo, removeTodo, toggleTodoStore} = crudSlice.actions;

export default productsSlice.reducer;