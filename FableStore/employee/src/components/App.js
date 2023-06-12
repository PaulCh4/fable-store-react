import '../styles/App.css';

import Header from "./Header";
import Home from "./Home"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>  
            <Route path="/catalog " element={<Home />}></Route>  
            <Route path="/collections" element={<Home />}></Route>        
            <Route path="/cart" element={<Home />}></Route>       
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
