import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import formSchema from '../validation/formSchema';
import { reach } from 'yup';
import styled from 'styled-components'

const initialFormValue = {
    username: '', 
    password: ''
};
const initialError = {
    username: '',
    password: ''
};

// Please fill in Username, Telephone, and Password to Sign Up Now!

const SignupForm = () => {
    const [disabled, setDisabled] = useState(true)
    const [formValue, setFormValue] = useState(initialFormValue);
    const [error, setError] = useState(initialError);
    const { push } = useHistory();

    const ButtonLogin = styled.button`
        border-radius: 10px;
        padding: 0.5rem 0;
        margin: 20.5rem 1.rem;
        width: 8rem;
        font-weight: bold;
        background: black;
        color: white;
        border: 5px solid gold;
    `
    const DivSignUp = styled.div`
    
        background-image: url('https://i.pinimg.com/originals/d4/7e/f7/d47ef762745c4d0a0486e4badd2c1757.jpg');
        background-position: center;
        background-size: cover;
        height: 80vh;
        
        
    
     `
     const LabelSignUp = styled.label`
        font-size: 3rem;
        color: white;
        background-color:black;
        border-radius: 20px;
        font-weight: bold;
        margin-top: 150px;
        border: 5px solid gold;
     `

    const validate = (name, value) =>{
        reach(formSchema, name)
        .validate(value)
        .then(() => setError({
            ...error, [name]:''}))
        .catch(err=> setError({
            ...error, [name]:err.errors[0]}))
    };

    const change = evt =>{
        const { name, value } = evt.target
        validate(name, value);
        setFormValue({...formValue, [name]: value})
    };

    const submit = (event) =>  {
        event.preventDefault();
        axios.post('https://ft-african-marketplace-05-back.herokuapp.com/api/auth/register', formValue)
        .then(res=>{
            console.log(res)
            push('/login');
        })
        .catch(err=>{console.log(err)});
    }
    useEffect(()=>{
        formSchema.isValid(formValue)
        .then(valid=> setDisabled(!valid))
    }, [formValue]);

    return (
        <form onSubmit={submit}>
            <DivSignUp>
                    <LabelSignUp>Signup:</LabelSignUp>
                    <br/>
                    <input type='text' name='username' value={formValue.username} placeholder='Username' onChange={change}/>
                    <br/>
                    <input type='password' name='password' value={formValue.password} placeholder='Password' onChange={change}/>
                    <br/>
                    <ButtonLogin className='submit' disabled={disabled}>SUBMIT</ButtonLogin>
                    <div className='errors'>
                        <div>{error.username}</div>
                        <div>{error.password}</div>
                    </div>    
            </DivSignUp>
        </form>
    )
}

export default SignupForm;
