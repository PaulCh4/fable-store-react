import React from 'react';

import '../styles/App.css';
import Header from "./Header/Header";
import Home from "./Home/Home"
import NotFoundPage from "./NotFoundPage"
import Collection from "./Collection/Collection"
import Product from "./Product/Product"
import CartPage from './Cart/CartPage';

import { BrowserRouter, Routes, Route,} from "react-router-dom"

import { Navigate } from 'react-router-dom';
import TestPage from "./TestPage/TestPage"
import SingleTestPage from "./TestPage/SingleTestPage"
import Create from "./TestPage/Create"
import Edit from "./TestPage/Edit"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>   
            <Route path="/collection" element={<Collection />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/sale" element={<NotFoundPage />}></Route>  

            <Route path="/login" element={<NotFoundPage />}></Route>             
            <Route path="/cart" element={<CartPage />}></Route>    

            <Route path="/*" element={<NotFoundPage />}></Route>     
            
            {/* <Route path="/about" element={<NotFoundPage />}></Route>  
            <Route path="/about-us" element={<Navigate to="/about" replace />}></Route>  переадресация

            <Route path="/constructor" element={<TestPage />}></Route>  
            <Route path="/constructor/:id" element={<SingleTestPage />}></Route>  
            <Route path="/constructor/new" element={<Create />}></Route>  
            <Route path="/constructor/:id/edit" element={<Edit />}></Route>   */}   
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
