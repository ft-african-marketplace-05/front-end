import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header=(props)=>{
    const { loggedIn } = props;

    return (
        <>
        {!loggedIn && 
        <StyledHeader>
            <h2>African Marketplace</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/itemlist'>Marketplace</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign up</Link>    
            </nav>
        </StyledHeader>}
        {loggedIn &&
        <StyledHeader>
            <h2>African Marketplace</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/itemlist'>Marketplace</Link>
                <Link to='/itemform'>Add Item</Link>
                <Link to='/logout'>Logout</Link>
            </nav>
        </StyledHeader>}
        </>

        
    );
};
export default Header;


const StyledHeader = styled.header`
display:flex;
justify-content: space-between;
align-items:center;
border: 1px solid white;
border-radius: 5px;

h2 {
    padding-left: 3%;
}

nav {
    display:flex;
    width: 40%;
    justify-content: space-between;
    margin-right: 3%;
}
a {
    text-decoration: none;
  }

`

