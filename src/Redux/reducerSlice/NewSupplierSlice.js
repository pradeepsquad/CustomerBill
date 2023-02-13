import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        supplierName: '', 
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

export const newSupplierSlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        newSupplier(state = initialState, action){
        console.log(action.payload);
        state.supplierName = action.payload.supplierName
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
export const {newSupplier} = newSupplierSlice.actions;
export default newSupplierSlice.reducer;