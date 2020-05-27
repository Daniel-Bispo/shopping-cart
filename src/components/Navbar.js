import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../products/img/logo.jpg';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <div className="logo-container">
                    <Link to='/' className='brand-logo'><img src={logo} width='120' alt='easy buy'/></Link>
                </div>

                <ul className='right'>
                    <li><Link to='/cart'>Meu carrinho</Link></li>
                    <li><Link to='/cart'><i className='material-icons'>shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;