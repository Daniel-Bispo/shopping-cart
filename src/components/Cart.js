import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const getProductList = (productList) => {
    console.log(productList)
    return productList.map(product => {
        return (
            <li className="collection-item avatar" key={product.id}>
                <div className="item-img">
                    <img src={product.img} alt={product.title} />
                </div>
                <div className="item-dec">
                    <span className="title">{product.title}</span>
                    <p><b>Preço: R$ {product.price.toFixed(2)}</b></p>
                    <p><b>Quantidade: {product.qty}</b></p>
                    <p><b>Total parcial: R$ {product.total.toFixed(2)}</b></p>

                    <div className="add-remove">
                        <Link to="/cart"><i className="material-icons" onClick={() => console.log(product.id)}>arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons" onClick={() => console.log(product.id)}>arrow_drop_down</i></Link>
                    </div>
                    <button className="waves-effect waves-light btn pink remove" onClick={() => console.log(product.id)}>Remover</button>
                </div>
            </li>
        );
    }
    );
}

const Cart = ({ productInCart }) => {
    return (
        <div className="container">
            <div className="cart">
                <h5>Você comprou:</h5>
                <ul className="collection">
                    {getProductList(productInCart)}
                </ul>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    productInCart: state.productInCart
});

export default connect(mapStateToProps)(Cart);