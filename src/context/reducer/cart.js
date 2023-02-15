import { ADD_TO_CART, REMOVE_CART } from "../action/actionType";

const cart = (state=[], action)=>{
    switch(action.type){
        case ADD_TO_CART: 
            return state = action.payload
        case REMOVE_CART:
            return state = state.filter(obj => obj.id !== action.payload)
        default: 
            return state
    }
}


export default cart