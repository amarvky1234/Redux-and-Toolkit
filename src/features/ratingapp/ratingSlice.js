import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: "Laptop",
            rating: 0,
        },
        {
            id: 2,
            name: "Mobile",
            rating: 0,
        },
        {
            id: 3,
            name: "Headphones",
            rating: 0,
        },
        {
            id: 4,
            name: "Smart Watch",
            rating: 0,
        },
        {
            id: 5,
            name: "Tablet",
            rating: 0,
        },
    ],
    filterRating: 0,
};

const ratingSlice = createSlice({
    name: "rating",
    initialState,

    reducers: {
        rateProduct: (state, action) => {
            const {id, rating} = action.payload;

            const product = state.products.find(
                (p) => p.id === id
            );

            if (product){
                product.rating = rating;
            }
        },

        setFilterRating: (state, action) => {
            state.filterRating = action.payload;
        },
    },
});

export const {
    rateProduct,
    setFilterRating,
} = ratingSlice.actions;

const ratingReducer = ratingSlice.reducer;

export default ratingReducer;