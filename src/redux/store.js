import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import cakeReducer from "./cakes/cakeReducer";
import rootReducer from "./rootReducer";
import reducer from "./user/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store