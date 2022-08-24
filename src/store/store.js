import { configureStore } from '@reduxjs/toolkit';

import sortingSlice from './reducers/sortingSlice';

const store = configureStore({
    reducer: { sort: sortingSlice.reducer },
});

export default store;