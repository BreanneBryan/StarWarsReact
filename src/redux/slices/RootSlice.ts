import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        rarity: "Rarity",
        size: "Size",
        release_date: "Date"

    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseRarity: (state, action) => { state.rarity = action.payload},
        chooseSize: (state, action) => { state.size = action.payload},
        chooseDate: (state, action) => { state.release_date = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseRarity, chooseSize, chooseDate } = rootSlice.actions