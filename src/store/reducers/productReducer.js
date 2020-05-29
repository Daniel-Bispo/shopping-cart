import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QTY, REM_QTY } from '../actions/actionsDef';

import productList from '../../products/productList';

const initialState = {
    productList: productList,
    productInCart: [],
    total: 0,
    totalValue: 0
};

function checkIfInCart(state, product) {
    let lastState = state.productInCart;
    const checkIfInCart = lastState.find((item) => item.id === product.id);
    return checkIfInCart;
}

function parseToCart(product) {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        qty: 1,
        total: 0
    };
}

function updateTotalValue(state) {
    state.totalValue = state.productInCart.reduce((acc, prod) => { return acc + prod.total }, 0);
}

function updateTotal(state, index) {
    state.productInCart[index].total = state.productInCart[index].price * state.productInCart[index].qty;
    state.total = state.productInCart.reduce((acc, prod) => { return acc + prod.qty }, 0);
    updateTotalValue(state);
}

const addQty = (state, product) => {
    const inCart = checkIfInCart(state, product);

    if (inCart) {
        const index = state.productInCart.indexOf(inCart);
        state.productInCart[index].qty++;
        updateTotal(state, index);
    }

    const productInCart = state.productInCart;
    const total = state.total;
    const totalValue = state.totalValue;

    return [productInCart, total, totalValue];
}

const remQty = (state, product) => {
    const inCart = checkIfInCart(state, product);

    if (inCart) {
        const index = state.productInCart.indexOf(inCart);
        if (state.productInCart[index].qty > 0) {
            state.productInCart[index].qty--;
        }
        updateTotal(state, index);
    }

    const productInCart = state.productInCart;
    const total = state.total;
    const totalValue = state.totalValue;

    return [productInCart, total, totalValue];
}

const addToCart = (state, product) => {

    const inCart = checkIfInCart(state, product);

    if (inCart) {
        addQty(state, product);
    }
    else {
        const parsedProduct = parseToCart(product);
        parsedProduct.total = parsedProduct.price;
        const index = state.productInCart.push(parsedProduct) - 1;
        updateTotal(state, index);
    }
    const productInCart = state.productInCart;
    const total = state.total;
    const totalValue = state.totalValue;

    return [productInCart, total, totalValue];
}

function removeItem(state, product) {
    const inCart = checkIfInCart(state, product);

    if (inCart) {
        const index = state.productInCart.indexOf(inCart);
        state.productInCart.splice(index, 1);
        updateTotalValue(state);
    }

    const productInCart = state.productInCart;
    const total = state.total;
    const totalValue = state.totalValue;

    return [productInCart, total, totalValue];
}


export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const respAdd = addToCart(state, action.product);
            return {
                ...state,
                productInCart: respAdd[0],
                total: respAdd[1],
                totalValue: respAdd[2]
            };
        case REM_QTY:
            const respRemQty = remQty(state, action.product);
            return {
                ...state,
                productInCart: respRemQty[0],
                total: respRemQty[1],
                totalValue: respRemQty[2]
            }
        case ADD_QTY:
            const respAddQty = addQty(state, action.product);
            return {
                ...state,
                productInCart: respAddQty[0],
                total: respAddQty[1],
                totalValue: respAddQty[2]
            }
        case REMOVE_FROM_CART:
            const respRemItem = removeItem(state, action.product);
            return {
                ...state,
                productInCart: respRemItem[0],
                total: respRemItem[1],
                totalValue: respRemItem[2]
            }
        default:
            return state;
    }
}