import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        receiptNo: '', 
        moneyInDate: '', 
        personName: '',
        receivedAmount: '',
};

export const newMoneyInSlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        newMoney(state = initialState, action){
        console.log(action.payload);
        state.receiptNo = action.payload.receiptNo
        state.moneyInDate = action.payload.moneyInDate
        state.personName = action.payload.personName
        state.receivedAmount = action.payload.receivedAmount
        },
    },    
});

export const {newMoney} = newMoneyInSlice.actions;
export default newMoneyInSlice.reducer;