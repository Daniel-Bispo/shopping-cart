import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as ProductActions from '../store/actions/productActions';

const handleClick = (addToCart, product) => {
    addToCart(product);
}


const getAllProducts = (productList, addToCart) => {
    return productList.map(product => {
        return (
            <div className='row' key={product.id}>
                <div className='col s12 m7'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={product.img} alt={product.title} />
                            <span className='btn-floating halfway-fab waves-effect waves-light teal lighten-2'
                                onClick={() => handleClick(addToCart, product)}>
                                <i className='material-icons'>add</i>
                            </span>
                        </div>

                        <div className='card-content'>
                            <p>{product.title}</p>
                            <p><b>Preço: R$ {product.price.toFixed(2)}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    );
}

const Home = ({ productList, addToCart }) => {
    return (
        <div className='container'>
            <div className='box'>
                <h3 className='left'>Produtos</h3>
            </div>

            <div className='box'>
                {getAllProducts(productList, addToCart)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    productList: state.productList
});


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProductActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);