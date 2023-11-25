import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseApi = createApi({
    reducerPath : "baseApi",
    baseQuery : fetchBaseQuery({baseUrl : "http://192.168.0.100:8080/api"}),
    tagTypes: ["amenities, rooms"],
    endpoints: () => ({}),
})