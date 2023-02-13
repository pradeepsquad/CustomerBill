import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        receiptNo: '', 
        moneyInDate: '', 
        personName: '',
        amountPaid: '',
};

export const newMoneyOutSlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        newMoneyOut(state = initialState, action){
        console.log(action.payload);
        state.receiptNo = action.payload.receiptNo
        state.moneyInDate = action.payload.moneyInDate
        state.personName = action.payload.personName
        state.amountPaid = action.payload.amountPaid
        },
    },    
});

export const {newMoneyOut} = newMoneyOutSlice.actions;
export default newMoneyOutSlice.reducer;