import React from 'react'
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Product = () => {

    const {id} = useParams();

    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/product/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id])
    
    return (
        <div>{product.name}</div>
    )
}
export default Product;
