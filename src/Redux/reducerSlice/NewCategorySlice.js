import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        categoryName: '',
};

export const  newCategorySlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        newCategory(state = initialState, action){
            console.log(action.payload);
            state.categoryName = action.payload;
        },
    },
});
export const {newCategory} = newCategorySlice.actions;
export default newCategorySlice.reducer;