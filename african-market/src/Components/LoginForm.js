import React, {useState} from 'react'
const initialValue = [{
    username: '',
    password: ''
}]

const LoginForm = () => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
   
    
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
            <input type='password' name='password' placeholder='Password' onChange={change}/>
            <br/>
            <input type='submit' value='Login'/>
        </form>
        
    )
}

export default LoginForm
