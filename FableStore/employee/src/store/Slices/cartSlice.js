import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        size: 0,
        totalCost: 0
    },
    reducers: {
        addProduct(state, action) {
        const { product, size, color } = action.payload;
        const price = product.price;
        const existingProductIndex = state.products.findIndex(
            (p) => p.color === color && p.size === size
        );

        if (existingProductIndex !== -1) {
            state.products[existingProductIndex].counter += 1;
        } else {
            state.products.push({
            id: new Date().toISOString(),
            name: product.name,
            image: product.image,
            collection: product.collection,
            article: null,
            size,
            color,
            counter: 1,
            price,
            });
        }

        state.size = state.products.length;
        state.totalCost += price;
        },
        removeProduct(state, action){
            console.log("REMOVE!", action.payload)

            const { id } = action.payload;
            const index = state.products.findIndex((product) => product.id === id)
            if (index != -1){
                state.totalCost -= state.products[index].price * state.products[index].counter;

                state.products.splice(index, 1)
                state.size--;
            }
        },
        incrementProduct(state, action){
            console.log("++!", action.payload)

            const { id } = action.payload;
            const index = state.products.findIndex((product) => product.id === id)
            if (index != -1 && state.products[index].counter <= 99){
                state.totalCost += state.products[index].price;
                state.products[index].counter++;
            }
        },
        decrementProduct(state, action){
            console.log("--!", action.payload)

            const { id } = action.payload;
            const index = state.products.findIndex((product) => product.id === id)
            if (index != -1 && state.products[index].counter > 1){
                state.totalCost -= state.products[index].price;

                state.products[index].counter--;
            }
        }
    }
});

export const {addProduct, removeProduct, incrementProduct, decrementProduct} = cartSlice.actions;

export default cartSlice.reducer;