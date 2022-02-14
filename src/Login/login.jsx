import React, {useState} from "react";
import style from './login.module.css'
import {NavLink} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault()
    }
    //3:46
    return (
        <div className={style.loginPage}>
            <NavLink to='/'>
                <img className={style.img} src={'http://pngimg.com/uploads/super_bowl/super_bowl_PNG14.png'}/>
            </NavLink>
            <div className={style.container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail((e.target.value))}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className={style.signInButton} onClick={signIn} type={"submit"}>Sign in</button>
                </form>
                <p>By continuing, you agree to Super Bowl's Conditions of Use and Privacy Notice.</p>
                <button className={style.createButton}>Create your Super Bowl account</button>
            </div>
        </div>
    )
}

export default Login;

