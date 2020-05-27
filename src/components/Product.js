import React from 'react';

const Product = (props) => {
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={props.prod.img} alt={props.prod.title} />
                        <span className="btn-floating halfway-fab waves-effect waves-light teal lighten-2">
                            <i className="material-icons">add</i>
                        </span>
                    </div>

                    <div className="card-content">
                        <p>{props.prod.title}</p>
                        <p><b>Preço: R$ {props.prod.price}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;