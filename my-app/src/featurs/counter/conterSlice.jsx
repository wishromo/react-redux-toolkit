import {createSlice} from "@reduxjs/toolkit"
const intialState={
    count:0
}
export const counterSlce = createSlice({
    name:'counter',
    intialState,
    reducers:
    {

          increment:(state)=>
        {
            state.count += 1;
        },
        decrement:(state)=>
            {
                state.count -= 1;
            }
    }

});
export const{increment,decrement}=counterSlce.actions
export default counterSlce.reducer