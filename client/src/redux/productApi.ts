import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { Product } from "../components/Shop/Products/Products"


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http:localhost:8080/',
    }),
    reducerPath: 'products-list',
    tagTypes: ['products-list'],
    endpoints: (builder) => ({
        getProductsList: builder.query<Product, void>({
            query: () => '',
        }),
        getProductById: builder.query<Product, string>({
            query: (id: string) => id , 
        }),
    }),

})

export const {  } = api.endpoints