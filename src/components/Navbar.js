import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../products/img/logo.png';

const Navbar = ({ total }) => {
    return (
        <nav className='nav-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col s3'>
                        <Link to='/' className='brand-logo'><img src={logo} width='130' alt='easy buy' /></Link>
                    </div>
                    <div className='col s6'>
                        <div className='center'>
                            <Link to='/'>Compras</Link>
                        </div>
                    </div>
                    <div className='col s3'>
                        <Link to='/cart'>
                            <ul className='right'>
                                <li>Meu carrinho</li>
                                <li><i className='material-icons'>shopping_cart</i></li>
                                <li>
                                    <div className='cart-items'>
                                        {total}
                                    </div>
                                </li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    total: state.total
});

export default connect(mapStateToProps)(Navbar);