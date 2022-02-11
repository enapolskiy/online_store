import './App.css';
import Header from "./Header";
import Home from "./Home";
import {Routes, Route} from 'react-router-dom'
import CheckOut from "./CheckOut";

function App() {
  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<CheckOut />} />
        </Routes>




    </div>
  )
}

export default App;
