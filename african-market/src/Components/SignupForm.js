import React, { useState } from 'react'

const initialFormValue = {username: '', email:'', password: '', confirm: ''};

const SignupForm = () => {

    const [initialValue, setInitialValue] = useState(initialFormValue);
    const [error, setError] = useState('');

    const change = (event) =>{
        setInitialValue({ ...initialValue, [event.target.name]: event.target.value})
    }

    const submit = (event) =>  {
        event.preventDefault();
        const loginInfo = {
            username: initialValue.username,
            email: initialValue.email,
            password: initialValue.password,
            confirm: initialValue.confirm

        }

        setInitialValue([ ...initialValue, loginInfo])
    }

    return (
        <form onSubmit={submit}>
            <label>Signup:</label>
            <br/>
            <input type='text' name='username' value={initialValue.username} placeholder='Username' onChange={change}/>
            <br/>
            <input type='email' name='email' value={initialValue.email} placeholder='Email' onChange={change} />
            <br/>
            <input type='password' name='password' value={initialValue.password} placeholder='Password' onChange={change}/>
            <br/>
            {/* <input type='password' name='confirm' value={initialValue.confirm} placeholder='Confirm Password' onChange={change}/>
            <br/> */}
            <input type='submit' value='signup'/>
        </form>
    )
}

export default SignupForm
