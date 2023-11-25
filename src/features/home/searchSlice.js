import {createSlice} from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const searchSlice = createSlice({
    name : "searchSlice",
    initialState : {
        searchedData : {
            startDate : dayjs().add(1 , "day"),
            endDate : dayjs().add(2 , "day"),
            room : 1,
            adult : 1,
            child : 0
        }
    },
    reducers : {
        setData : (state, {payload}) => {
            state.searchedData = payload
        },

        resetData : (state, _) => {
            state.searchedData = {
                startDate : dayjs().add(1 , "day"),
                endDate : dayjs().add(2 , "day"),
                room : 1,
                adult : 1,
                child : 0
            }
        }
    }
})
export const {setData, resetData} = searchSlice.actions;
export default  searchSlice.reducer;