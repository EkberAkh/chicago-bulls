import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models";

const initialState: Product = {
    id: 0,
    category: '',
    description: '',
    img: '',
    price: 0,
    rating: 0,
}

const slice = createSlice({
    name: "@product",
    initialState,
    reducers: {},
})


export default slice.reducer;