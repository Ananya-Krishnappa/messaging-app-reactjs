import React from 'react';
import { Button } from '@material-ui/core';
import './Login.scss';
import { auth, provider } from '../../firebase';
const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="logo512.png" alt="whatsapp" />
                <div className="login__text"></div>
                <h1>Sign in to Messaging App</h1>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}
export default Login;