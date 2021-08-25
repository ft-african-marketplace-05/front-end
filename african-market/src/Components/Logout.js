import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
    const {logout} = props
    localStorage.removeItem('token');
    logout();
    return (
        <Redirect to='/'/>
    )

};
export default Logout;