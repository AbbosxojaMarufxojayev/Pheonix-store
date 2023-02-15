import { combineReducers } from "redux";
import heart from "./heart";
import cart from "./cart"

const rootReducer = combineReducers({
    water: ()=> "redux water",
    heart,
    cart
})


export default rootReducer