import { combineReducers } from "redux";
import heart from "./heart";
import cart from "./cart"
import auth from "./auth";

const rootReducer = combineReducers({
    water: ()=> "redux water",
    heart,
    cart,
    auth
})


export default rootReducer