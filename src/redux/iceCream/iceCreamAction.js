import { BUY_ICECREAM } from "./iceCreamType";

export const buyIcecream = (quantity) =>{
    return {
        type: BUY_ICECREAM,
        payload: quantity
    }
}