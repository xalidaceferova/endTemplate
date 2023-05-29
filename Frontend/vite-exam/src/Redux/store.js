
import {configureStore} from "@reduxjs/toolkit"
import WishlistSlice from "./WishlistSlice"
export const store=configureStore({
    reducer:{
        wishlist:WishlistSlice
    }
})