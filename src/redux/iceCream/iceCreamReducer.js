import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
    numOfIcecream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - action.payload
        }

        default: return state;
    }

}
export default iceCreamReducer;