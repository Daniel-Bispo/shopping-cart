import React from 'react';

import Product from './Product';

import productList from '../products/productList';


const getAllProducts = productList.map(product => <Product prod={product} key={product.id}/>);

const Home = () => {
    return (
        <div className="container">
            <div className="box">
                <h3 className="left">Produtos</h3>
            </div>

            <div className="box">
                {getAllProducts}
            </div>
        </div>
    );
}

export default Home;