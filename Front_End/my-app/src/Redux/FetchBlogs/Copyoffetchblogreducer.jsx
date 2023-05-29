import { createSlice } from "@reduxjs/toolkit";
export const Copyoffetchuserblog = createSlice({
    name: "Copyoffetchuserblog",
    initialState: [],
    reducers:
    {
        Copyforrendering: (state, action) => {
            return [...action.payload]
        },
     
    }
})

export const { Copyforrendering } = Copyoffetchuserblog.actions;
export default Copyoffetchuserblog.reducer