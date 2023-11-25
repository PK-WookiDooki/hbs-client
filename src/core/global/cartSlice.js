import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cartSlice",
    initialState: {
        totalAmount : 0,
        totalRooms  : 0,
        selectedRooms : [],
    },
    reducers : {
        addRoomToCart : (state, {payload}) => {
            const {totalRooms, id, pricePerNight} = payload;
            const isExisted = state.selectedRooms.find(room => room.id === id);

            if(isExisted){
                if(totalRooms === 0){
                    state.totalAmount -= isExisted.totalRooms * isExisted.pricePerNight;
                    state.totalRooms -= isExisted.totalRooms;
                    state.selectedRooms = state.selectedRooms.filter(room => room.id !== isExisted.id)
                }else{
                    if(totalRooms > isExisted.totalRooms) {
                        state.totalAmount += (totalRooms - isExisted.totalRooms) * isExisted.pricePerNight;
                        state.totalRooms += totalRooms - isExisted.totalRooms;
                        isExisted.totalRooms += totalRooms - isExisted.totalRooms;
                    }else{
                        state.totalAmount -= (isExisted.totalRooms - totalRooms) * isExisted.pricePerNight;
                        state.totalRooms -= isExisted.totalRooms - totalRooms;
                        isExisted.totalRooms -= isExisted.totalRooms - totalRooms;
                    }
                }
            }else{
                if(totalRooms > 0){
                    state.selectedRooms.push(payload)
                    state.totalRooms += totalRooms;
                    state.totalAmount += totalRooms * pricePerNight;
                }
            }
        },

        removeFromCart : (state, {payload}) => {
            const {id} = payload;
            const currentRoom = state.selectedRooms.find(room => room.id === id);
            state.totalAmount -= currentRoom.totalRooms * currentRoom.pricePerNight;
            state.totalRooms -= currentRoom.totalRooms;
            state.selectedRooms = state.selectedRooms.filter(room => room.id !== currentRoom.id)
        },

        clearCart : (state, _) => {
            state.totalAmount = 0;
            state.totalRooms = 0;
            state.selectedRooms = []
        }
    }
})

export const {clearCart,addRoomToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;