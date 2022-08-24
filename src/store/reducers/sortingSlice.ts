import {createSlice} from "@reduxjs/toolkit"

import Quote from "../../models/quote";

let quotesArray: Quote[] = [];

const sortingSlice = createSlice({
    name: "sort",
    initialState: {
        items: quotesArray,
    },
    reducers: {
        populateItems(state, action) {
            state.items.push(...action.payload);
        },
        sortAscending(state) {
            state.items.sort((quoteA: Quote, quoteB: Quote) => {
                return quoteA.text > quoteB.text ? 1 : -1;
            })
        },
        sortDescending(state) {
            state.items.sort((quoteA: Quote, quoteB: Quote) => {
                return quoteA.text < quoteB.text ? 1 : -1;
            })
        },
        sortByAuthor(state) {
            state.items.sort((quoteA: Quote, quoteB: Quote) => {
                return quoteA.author < quoteB.author ? 1 : -1;
            })
        },
    }
})


export const sortActions = sortingSlice.actions;

export default sortingSlice;