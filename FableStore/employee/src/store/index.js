import {configureStore} from '@reduxjs/toolkit';
import collectionsReducer from './Slices/collectionsSlice'
import categoriesReducer from './Slices/categoriesSlice'
import productsReducer from './Slices/productsSlice'
import cartReducer from './Slices/cartSlice'

export default configureStore({
    reducer: {
        collections: collectionsReducer,
        categories: categoriesReducer,
        products: productsReducer,

        cart: cartReducer

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