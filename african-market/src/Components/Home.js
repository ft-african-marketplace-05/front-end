import React from 'react';
import styled from 'styled-components';

const Home=()=>{

    const DivHome = styled.div`
        background-image: url('https://grain.org/media/W1siZiIsIjIwMTgvMTEvMDgvMDZfMzNfMDVfNjU4X1llZWJvX01hcmtldF8wMS5qcGciXSxbInAiLCJ0aHVtYiIsIjgwMHgiXV0');
        background-position: center;
        height: 90vh;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        
    `
    const Mission = styled.label`
        padding-top: 20%;
    `

    return(
        <div>
            <DivHome>
                <Mission>
                    <h1>Our Mission</h1>
                        <h3>We have created this app to help the people of Africa reach and sell there goods to a larger audience.<br/>Once logged into your account you will be able to search to see what the price of similar items to what you want to sell.<br/>Also, once logged in you will be able to create a listing and post your item to The African Market</h3>
                </Mission>
            </DivHome>


        </div>
            
    )
};
export default Home;