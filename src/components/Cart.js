import React from 'react';


const Cart = () => {
    return(
        <div className="container">
            <div className="cart">
                <h5>Você comprou:</h5>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <div className="item-dec">
                            <span className="title">Item nome</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cart;