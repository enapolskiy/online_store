import React from "react";
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import {Routes, Route} from 'react-router-dom'
import CheckOut from "./Checkout/CheckOut";
import Login from "./Login/login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
     const [{}, dispatch] = useStateValue();
    useEffect(() => {

        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='/checkout' element={<CheckOut/>}/>
            </Routes>


        </div>
    )
}

export default App;
