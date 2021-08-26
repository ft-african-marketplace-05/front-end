import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import formSchemaLogin from '../validation/formSchemaLogin';

const initialFormValue = {
    username: '',
    password: ''
};

const initialDisabled = true;

const LoginForm = (props) => {
    const { setLoggedIn } = props;
    const [formValue, setFormValue] = useState(initialFormValue);
    const [disabled, setDisabled] = useState(initialDisabled);
    const { push } = useHistory();
   

    const change = (evt) =>{
        const { name, value } = evt.target;
        setFormValue({ ...formValue, [name]:value});
    };

    const submit = (event) =>  {
        event.preventDefault();
        console.log(formValue);
        axios.post('https://ft-african-marketplace-05-back.herokuapp.com/api/auth/login', formValue)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            setLoggedIn(true);
            push('/')
        })
        .catch(err=>{console.log(err)})
    };
    useEffect(()=>{
        formSchemaLogin.isValid(formValue)
        .then(valid=> setDisabled(!valid))
    }, [formValue]);
    return (
        
        <form onSubmit = {submit}>
            <label>Login:</label>
             <br/>
            <input type='text' name='username' value={formValue.username} placeholder='Username' onChange={change}/>
            <br/>
            <input type='password' name='password' value={formValue.password} placeholder='Password' onChange={change}/>
            <br/>
            <button disabled={disabled} className='submit'>Submit</button>
        </form>
        
    )
}

export default LoginForm;
