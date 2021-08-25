import React, { useState } from 'react'

const initialValue = [{username: '', telephone:'', password: ''}];

const SignupForm = () => {

    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('Please fill in Username, Telephone, and Password to Sign Up Now!');

    const change = (event) =>{
        setValue({ ...value, [event.target.name]: event.target.value})
    }

    const submit = (event) =>  {
        event.preventDefault();
        const loginInfo = {
            username: value.username,
            telephone: value.telephone,
            password: value.password,
        }

        setValue([ ...value, loginInfo])
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
            {initialValue.username === value.username ? error : <input type='submit' value='Sign Up'/> && initialValue.telephone === value.telephone ? error : <input type='submit' value='Sign Up'/> && initialValue.password === value.password ? error : <input type='submit' value='Sign Up'/>}
        </form>
    )
}

export default SignupForm
