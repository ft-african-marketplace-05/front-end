import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import formSchema from '../validation/formSchema';
import { reach } from 'yup';

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
            <label>Signup:</label>
            <br/>
            <input type='text' name='username' value={formValue.username} placeholder='Username' onChange={change}/>
            <br/>
            <input type='password' name='password' value={formValue.password} placeholder='Password' onChange={change}/>
            <br/>
            <button className='submit' disabled={disabled}>Submit</button>
            <div className='errors'>
                <div>{error.username}</div>
                <div>{error.password}</div>
            </div>
        </form>
    )
}

export default SignupForm;
