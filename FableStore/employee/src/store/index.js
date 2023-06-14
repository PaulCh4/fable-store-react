import {configureStore} from '@reduxjs/toolkit';
import crudReducer from './CRUDSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
        // -- Slices --
        // user: userReducer
        // user: userReducer
        // user: userReducer
    }

});