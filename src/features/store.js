import {configureStore} from "@reduxjs/toolkit";
import roomsSlice from "@/features/rooms/roomsSlice.js";
import cartSlice from "@/core/global/cartSlice.js";
import searchSlice from "@/features/home/searchSlice.js";
import formSlice from "@/features/reservation/formSlice.js";
import {baseApi} from "@/core/global/baseApi.js";

export const store = configureStore({
    reducer : {
        roomsSlice : roomsSlice,
        cartSlice : cartSlice,
        searchSlice : searchSlice,
        formSlice : formSlice,
        [baseApi.reducerPath] : baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck : false}).concat(baseApi.middleware)
})