import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import formSchemaLogin from '../validation/formSchemaLogin';
import styled from 'styled-components'



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
        axios.post('https://ft-african-marketplace-05-back.herokuapp.com/api/auth/login', formValue)
        .then(res=>{
            localStorage.setItem("authorization", res.data.token);
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
            <DivLogin className='login-form'>
                <LabelLogin>Login:</LabelLogin>
                <br/>
                <input type='text' name='username' value={formValue.username} placeholder='Username' onChange={change}/>
                <br/>
                <input type='password' name='password' value={formValue.password} placeholder='Password' onChange={change}/>
                <br/>
                <ButtonLogin disabled={disabled} className='submit'>SUBMIT</ButtonLogin>
            </DivLogin>
        </form>
        
    )
}

export default LoginForm;

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
const DivLogin = styled.div`

    background-image: url('https://i.pinimg.com/originals/d4/7e/f7/d47ef762745c4d0a0486e4badd2c1757.jpg');
    background-position: center;
    background-size: cover;
    height: 80vh;
`   
const LabelLogin = styled.label`
    font-size: 3rem;
    color: white;
    background-color:black;
    border-radius: 20px;
    font-weight: bold;
    margin-top: 150px;
    border: 5px solid gold;
`