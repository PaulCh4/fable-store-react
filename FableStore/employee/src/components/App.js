import React from 'react';

import '../styles/App.css';

import Header from "./Header/Header";
import Home from "./Home/Home"
import ErrorPage from "./ErrorPage"
import Collection from "./Collection/Collection"

import TestPage from "./TestPage/TestPage"
import SingleTestPage from "./TestPage/SingleTestPage"
import Create from "./TestPage/Create"
import Edit from "./TestPage/Edit"

import Product from "./Product/Product"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>   
            <Route path="/collection" element={<Collection />}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
{/* 
            <Route path="/about" element={<ErrorPage />}></Route>  
            <Route path="/about-us" element={<Navigate to="/about" replace />}></Route>  переадресация

            <Route path="/constructor" element={<TestPage />}></Route>  
            <Route path="/constructor/:id" element={<SingleTestPage />}></Route>  
            <Route path="/constructor/new" element={<Create />}></Route>  
            <Route path="/constructor/:id/edit" element={<Edit />}></Route>   */}


            <Route path="/sale" element={<ErrorPage />}></Route>  

            <Route path="/login" element={<ErrorPage />}></Route>             
            <Route path="/cart" element={<ErrorPage />}></Route>    


            <Route path="/*" element={<ErrorPage />}></Route>        
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
