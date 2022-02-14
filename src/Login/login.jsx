import style from './login.module.css'
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className={style.loginPage}>
            <NavLink to='/'>
                <img className={style.img} src={'http://pngimg.com/uploads/super_bowl/super_bowl_PNG14.png'}/>
            </NavLink>
            <div className={style.container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button onClick={style.signInButton}>Sign in</button>
                </form>
                <p>By continuing, you agree to Super Bowl's Conditions of Use and Privacy Notice.</p>
                <button className={style.createButton}>Create your Super Bowl account</button>
            </div>
        </div>
    )
}

export default Login;

