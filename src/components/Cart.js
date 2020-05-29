import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as ProductActions from '../store/actions/productActions';

const handleClick = (setState, productInCart, removeFromCart, product) => {
    const newCart = productInCart.filter(prod => prod.id !== product.id);
    setState(newCart);
    removeFromCart(product);
}

const getProductList = (state, setState, productInCart, addQty, remQty, removeFromCart) => {
    if (state.length) {
        return (
            <div className='cart'>
                <h5>Você comprou:</h5>
                <ul className='collection'>
                    {
                        state.map(product => {
                            return (
                                <li className='collection-item avatar' key={product.id}>
                                    <div className='item-img'>
                                        <img src={product.img} alt={product.title} />
                                    </div>
                                    <div className='item-desc'>
                                        <span className='title'>{product.title}</span>
                                        <p><b>Preço: R$ {product.price.toFixed(2)}</b></p>
                                        <p><b>Total parcial: R$ {product.total.toFixed(2)}</b></p>
                                    </div>
                                    <div className='alter-qty'>
                                        <div className='add-remove'>
                                            <Link to='/cart'>
                                                <i className='material-icons'
                                                    onClick={() => remQty(product)}>
                                                    remove
                                                </i>
                                            </Link>
                                            <p className='unit'>{product.qty}</p>
                                            <Link to='/cart'>
                                                <i className='material-icons'
                                                    onClick={() => addQty(product)}>
                                                    add
                                                </i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='rem-prod'>
                                        <button className='waves-effect waves-light btn pink remove'
                                            onClick={
                                                () => {
                                                    handleClick(setState, productInCart, removeFromCart, product)
                                                }
                                            }>
                                            Remover
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    else {
        return (
            <h5>Seu carrinho está vazio</h5>
        );
    }
}

const Cart = ({ productInCart, totalValue, addQty, remQty, removeFromCart }) => {
    const [state, setState] = useState(productInCart);

    return (
        <div className='container'>
            {getProductList(state, setState, productInCart, addQty, remQty, removeFromCart)}
            <div className='container total'>
                <div className='cart-total'>
                    <h5>Total: R$ {totalValue.toFixed(2)}</h5>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => ({
    productInCart: state.productInCart,
    totalValue: state.totalValue
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);