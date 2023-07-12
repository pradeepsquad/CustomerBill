import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    filePath: '',
};

export const  profileImageSlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        imageSupplier(state = initialState, action){
            console.log(action.payload);
            state.filePath = action.payload;
        },
    },
});
export const {imageSupplier} = profileImageSlice.actions;
export default profileImageSlice.reducer;