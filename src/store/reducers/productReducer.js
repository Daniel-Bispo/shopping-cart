import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QTY, REM_QTY } from '../actions/actionsDef';

import productList from '../../products/productList';



const initialState = {
    productList: productList,
    productInCart: []
};

// function addItem() {

// }

// function removeItem() {

// }

// function addQty() {

// }

// function remQty() {

// }

function parseToCart(product){
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        qty: 1,
        total: 0.0
    };
    
}

export const productReducer = (state = initialState, action) => {
    console.log(state)

    const addToCart = (product) => {
        let lastState = state.productInCart;

        const checkIfInCart = lastState.find((item) => item.id === product.id);
        
        if(checkIfInCart){
            const index = lastState.indexOf(checkIfInCart);
            lastState[index].qty++;
            lastState[index].total = lastState[index].price * lastState[index].qty;
        }
        else{
            let parsedProduct = parseToCart(product);
            parsedProduct.total = parsedProduct.price;
            lastState.push(parsedProduct);
        }        
        return lastState;
    }

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                productInCart: addToCart(action.product)
            };

        default:
            return state;
    }
}