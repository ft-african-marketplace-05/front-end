import React from 'react';
import { Link } from 'react-router-dom';

const Header=(props)=>{
    const { loggedIn, setLoggedIn} = props;
    

    return (
        <header>
            <h2>African Marketplace</h2>
            <nav>
                <Link to='/'>Home</Link>
                {loggedIn &&
                <Link to='/itemlist'>Marketplace</Link>}
                {loggedIn &&
                <Link to='/itemform'>Add Item</Link>}
                {!loggedIn &&
                <Link to='/login'>Login</Link>}
                {!loggedIn &&
                <Link to='/signup'>Sign up</Link>}     
                {loggedIn &&
                <Link to='/logout'>Logout</Link>}
            </nav>
        </header>
    );
};
export default Header;