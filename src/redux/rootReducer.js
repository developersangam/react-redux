import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import reducer from './user/userReducer'
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: reducer
})

export default rootReducer