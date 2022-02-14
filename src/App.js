import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import {Routes, Route} from 'react-router-dom'
import CheckOut from "./Checkout/CheckOut";
import Login from "./Login/login";

function App() {
  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='/checkout' element={<CheckOut />} />
        </Routes>




    </div>
  )
}

export default App;
