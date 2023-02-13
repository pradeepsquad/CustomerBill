import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        serviceName: '', 
        salePrice: '', 
        selectPriceUnit: '', 
        optionalMRP: '', 
        purchasePrice: '',
        itemCategory: '', 
        cessValue: '',
        HSNCode: '', 
        itemCode: '', 
        barCode: '', 
        itemDescription: '', 
        openingStock: '', 
        lowStock: '', 
        storageLocation: '', 
        selectBulkPurchase: '',
        saleUnit: '', 
        purchaseUnit: '',
};

export const addServiceSlice = createSlice({
    name: 'reducerState',
    initialState,
    reducers: {
        addService(state = initialState, action){
        console.log(action.payload);
        state.serviceName = action.payload.serviceName
        state.salePrice = action.payload.salePrice
        state.selectPriceUnit = action.payload.selectPriceUnit
        state.optionalMRP = action.payload.optionalMRP
        state.purchasePrice = action.payload.purchasePrice
        state.itemCategory = action.payload.itemCategory
        state.cessValue = action.payload.cessValue
        state.HSNCode = action.payload.HSNCode
        state.itemCode = action.payload.itemCode
        state.barCode = action.payload.barCode
        state.itemDescription = action.payload.itemDescription
        state.openingStock = action.payload.openingStock
        state.lowStock = action.payload.lowStock
        state.storageLocation = action.payload.storageLocation
        state.selectBulkPurchase = action.payload.selectBulkPurchase
        state.saleUnit = action.payload.saleUnit
        state.purchaseUnit = action.payload.purchaseUnit

        },
    },    
});

export const {addService} = addServiceSlice.actions;
export default addServiceSlice.reducer;