import React, {useState} from "react";
import style from './login.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {auth} from "../firebase";

const Login = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
             navigate('')
            }
        )
    }

    const register = e => {
        e.preventDefault();
    }

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {navigate('')}
        })
        // .catch(error => alert(error.message))

    return (
        <div className={style.loginPage}>
            <NavLink to='/'>
                <img className={style.img} src={'http://pngimg.com/uploads/super_bowl/super_bowl_PNG14.png'}/>
            </NavLink>
            <div className={style.container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)}/>
                    <button onClick={signIn} type='submit'>Sign in</button>
                </form>
                <p>By continuing, you agree to Super Bowl's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}>Create your Super Bowl account</button>
            </div>
        </div>
    )
}

export default Login;

