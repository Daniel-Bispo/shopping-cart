import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QTY, REM_QTY } from './actionsDef';

export const addToCart = (product)=>{
    return{
        type: ADD_TO_CART,
        product,
    }
}

export const removeFromCart = (product)=>{
    return{
        type: REMOVE_FROM_CART,
        product,
    }
}

export const addQty = (product)=>{
    return{
        type: ADD_QTY,
        product,
    }
}

export const remQty = (product)=>{
    return{
        type: REM_QTY,
        product,
    }
}