import React, {useState} from 'react'

const initialValue = [{
    username: '',
    password: ''
}]

const LoginForm = () => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('Please fill in Username and Password to Log in!');
   
    
    const change = (event) =>{
        setValue({ ...value, [event.target.name]: event.target.value});
    }

    const submit = (event) =>  {
        event.preventDefault();
        const loginInfo = {
            username: value.username,
            password: value.password
        }

        setValue([ ...value, loginInfo ])

        
    }

    return (
        
        <form onSubmit = {submit}>
            <label>Login:</label>
             <br/>
            <input type='text' name='username' placeholder='Username' onChange={change}/>
            <br/>
            <input type='password' name='password' placeholder='Password' onChange={change}/>
            <br/>
            {initialValue.username === value.username ? error : <input type='submit' value='Login'/> && initialValue.password === value.password ? error : <input type='submit' value='Login'/>}
        </form>
        
    )
}

export default LoginForm
