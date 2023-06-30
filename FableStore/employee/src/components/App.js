import React from 'react';

import '../styles/App.css';
import Header from "./Header/Header";
import Home from "./Home/Home"
import NotFoundPage from "./NotFoundPage"
import Collection from "./Collection/Collection"
import Product from "./Product/Product"
import CartPage from './Cart/CartPage';

import { BrowserRouter, Routes, Route,} from "react-router-dom"


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
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
