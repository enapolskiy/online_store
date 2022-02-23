import React from "react";
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import {Routes, Route} from 'react-router-dom'
import CheckOut from "./Checkout/CheckOut";
import Login from "./Login/login";
import Payment from "./Payment/Payment";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
const promise = loadStripe('pk_test_51KVTHPBgn08DShUyqCtmx8ryBfZUdOZdsjA6EneKGzupiBn6LT80BbFUvn9G3vevUyGIZEx3naeiWZNGIYJnUPOh00hR009hxD');

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
            <Routes>
                <Route path='/' element={[<Header/>, <Home/>]}/>
                <Route path='login' element={[<Header/>, <Login/>]}/>
                <Route path='/checkout' element={[<Header/>, <CheckOut/>]}/>
                <Route path='/payment' element={[<Header/>, <Elements stripe={promise}><Payment/></Elements>]}/>

            </Routes>


        </div>
    )
}

export default App;
