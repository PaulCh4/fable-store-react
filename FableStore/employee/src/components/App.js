import React from 'react';

import '../styles/App.css';

import Header from "./Header";
import Home from "./Home"
import ErrorPage from "./ErrorPage"
import Collection from "./Collection"
import TestPage from "./TestPage"

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
            <Route path="/collection" element={<Collection />}></Route>
            <Route path="/constructor" element={<TestPage />}></Route>  
            <Route path="/sale" element={<ErrorPage />}></Route>  

            <Route path="/login" element={<ErrorPage />}></Route>             
            <Route path="/cart" element={<ErrorPage />}></Route>       
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
