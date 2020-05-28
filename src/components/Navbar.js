import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../products/img/logo.png';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <div className="logo-container">
                    <Link to='/' className='brand-logo'><img src={logo} width='130' alt='easy buy'/></Link>
                </div>

                <Link to='/cart'>
                <ul className='right'>
                    <li>Meu carrinho</li>
                    <li><i className='material-icons'>shopping_cart</i></li>
                </ul>
                </Link>


                
            </div>
        </nav>
    );
}

export default Navbar;