import React from 'react'

import styles from '../../styles/Collection.module.css';

import { useDispatch ,useSelector } from 'react-redux';
import { removeProduct, incrementProduct, decrementProduct } from '../../store/Slices/cartSlice';


const ProductList = () => {
  const products = useSelector(state => state.cart.products) 

  const dispatch = useDispatch()

  const RemoveProduct = (id) => {
    dispatch(removeProduct({id}))
  }
  const IncrementProduct = (id) => {
    dispatch(incrementProduct({id}))
  }
  const DecrementProduct = (id) => {
    dispatch(decrementProduct({id}))
  }


  // const getCollection = (product)=> {
  //   return (useSelector(state => state.collections.filter(product.collections = state.collections.id)) 
  // )}  
  // console.log(products)
  const collections = useSelector(state => state.collections) 

  const getCollection = (product) => {
    const productCollection = collections.find(collection => collection.id === product.collection);
    return productCollection ? productCollection.name : '';
  };

  return (
      <div>
        {products.map((product) => { 
          return <div key={product.id} style={{"display": "flex"}}>

            {/* --- ProductItem ---- */}
            <img src={product.image} className={styles.logo} alt="Stuff" style={{"maxWidth": "30%"}}/>
            <div>
              <div>
                <h1>{product.name}</h1>
                <p>Коллекция: {getCollection(product)}</p>
                <p>Артикуль: {product.article} @@@@</p>
              </div>
              <div style={{"display": "flex", "gap":"10px"}}>
                <h1>Размер: <span>{product.size}</span></h1>
                <h1>Цвет: <span>{product.color}</span></h1>
                <h1>
                  Количество:
                  <label htmlFor="">
                    <button onClick={() => DecrementProduct(product.id)}>-</button>
                    <span>{product.counter}</span>
                    <button onClick={() => IncrementProduct(product.id)}>+</button>
                  </label>
                </h1>
              </div>
              <div style={{"display": "flex", "justifyContent": "center"}}>
                <h1>Цена: <span>{product.price}</span> $</h1>
                <button onClick={() => RemoveProduct(product.id)}>Удалить</button>
              </div>
            </div>
          </div>})}    
        </div>
        )
}

export default ProductList;
