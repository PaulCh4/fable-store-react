import {configureStore} from '@reduxjs/toolkit';
import collectionsReducer from './Slices/collectionsSlice'
import categoriesReducer from './Slices/categoriesSlice'
import productsReducer from './Slices/productsSlice'

export default configureStore({
    reducer: {
        collections: collectionsReducer,
        categories: categoriesReducer,
        products: productsReducer,


        
        // -- Slices --
        // products:
        // ctaegories: 
        // collections:
        //
        // filterState:
        //
        // user:
        // cart:
    }

});