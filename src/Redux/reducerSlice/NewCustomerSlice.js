import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        customerName: '', 
        phoneNumber: '', 
        billingAddress: '', 
        gstNumber: '', 
        selectBillingState: '', 
        billingPinCode: '',
        deliveryAddress: '', 
        selectDeliveryState: '', 
        deliveryPinCode: '', 
        openingBalance: '', 
        selectBalanceType: '', 
        selectBillingTerm:'',
};

export const newCustomerSlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        newCustomer(state = initialState, action){
        console.log(action.payload);
        state.customerName = action.payload.customerName
        state.phoneNumber = action.payload.phoneNumber
        state.billingAddress = action.payload.billingAddress
        state.gstNumber = action.payload.gstNumber
        state.selectBillingState = action.payload.selectBillingState
        state.billingPinCode = action.payload.billingPinCode
        state.deliveryAddress = action.payload.deliveryAddress
        state.selectDeliveryState = action.payload.selectDeliveryState
        state.deliveryPinCode = action.payload.deliveryPinCode
        state.openingBalance = action.payload.openingBalance
        state.selectBalanceType = action.payload.selectBalanceType
        state.selectBillingTerm = action.payload.selectBillingTerm

        },
    },    
});

export const {newCustomer} = newCustomerSlice.actions;
export default newCustomerSlice.reducer;