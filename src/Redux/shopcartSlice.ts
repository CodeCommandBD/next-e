import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type";


interface InitialState {
    cart: Product[];
    favorite: Product[];
    userInfo: unknown;
}


const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null,
}

export const shopcartSlice = createSlice({
    name: 'shopcart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload.id)

            if (existingProduct) {
                existingProduct.quantity! += 1
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }

        },
        increaseQuantity: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload)
            if (existingProduct) {
                existingProduct.quantity! += 1
            }
        },
        decreaseQuantity: (state, action) =>{
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload)
            if (existingProduct) {
                existingProduct.quantity! -= 1
            }
        },

        // Remove from cart 
        removeFromCart:(state, action) =>{
            state.cart = state.cart.filter((item)=>item?.id !== action.payload)
        },
        // reset cart
        resetCart: (state) =>{
            state.cart=[]
        },
        // Favorite cart
        addToFavorite: (state,action) => {
            const existingProduct = state?.favorite?.find((item)=>item?.id === action.payload.id);
            if(existingProduct){
                state.favorite = state.favorite.filter((item)=>item?.id !== action.payload.id)
            }else{
                state.favorite.push(action.payload)
            }
        },
        // reset favorite
        resetFavorite:(state) =>{
            state.favorite = []
        },   
    }
})


export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart,resetCart,resetFavorite, addToFavorite } = shopcartSlice.actions

export default shopcartSlice.reducer