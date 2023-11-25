import {baseApi} from "@/core/global/baseApi.js";

const endPoint = "/room-types"
export const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRoomTypes: builder.query({
            query: () => ({
                url : `${endPoint}`,
                method : "GET",
            }),
            providesTags : ["rooms"]
        }),

        getRoomTypeById : builder.query({
            query : (roomId) => ({
                url : `${endPoint}/${roomId}`,
                method : "GET"
            })
        })
    }),
})

export const { useGetAllRoomTypesQuery, useGetRoomTypeByIdQuery } = roomApi