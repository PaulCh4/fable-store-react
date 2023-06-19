import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) =>{
            return action.payload;
        }
    }
});

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;






// export const {addTodo, removeTodo, toggleTodoStore} = crudSlice.actions;
        // addTodo(state, action){
        //     state.todos.push({
        //         id: new Date().toISOString(),
        //         text: action.payload.text,
        //         complited: false,
        //     });
        // },
        // removeTodo(state, action){

        // },
        // toggleTodoStore(state, action){

        // },