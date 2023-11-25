import {createSlice} from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name : "formSlice",
    initialState: {
        userInfo : {
            guestName : "",
            email : "",
            phone : "",
            address : "",
            specialRequest : ""
        }
    },
    reducers : {
        setUserInfo : (state, {payload}) => {
            state.userInfo = payload
        }
    }
})

export const {setUserInfo} = formSlice.actions;
export default formSlice.reducer