import { createSlice } from "@reduxjs/toolkit";


const WishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addwishlist:(state,action)=>{
            state.items.push(action.payload)
        },
        removewishlist:(state,action)=>{
           const target= state.items.find(item=>item.id==action.payload)
            const indexofTarget=state.items.indexOf(target)
            state.items.splice(indexofTarget,1)
        }
    }
})

export const {addwishlist,removewishlist}=WishlistSlice.actions
export default WishlistSlice.reducer