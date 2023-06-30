import React from 'react'

import styles from '../../styles/CartProductList.module.css';

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

  const collections = useSelector(state => state.collections) 

  const getCollection = (product) => {
    const productCollection = collections.find(collection => collection.id === product.collection);
    return productCollection ? productCollection.name : '';
  };

  return (
      <div>
        {products.map((product) => { 
          return <div key={product.id} className={styles.container}>
            <img src={product.image} className={styles.logo} alt="Stuff" />
            <div className={styles.cardDiscription}>
              <header>
                <h1>{product.name}</h1>
                <p>Коллекция: {getCollection(product)}</p>
              </header>
              <section>
                <h2>Размер: <span>{product.size}</span></h2>
                <h2>Цвет: <span>{product.color}</span></h2>
                <h2>
                  Количество:
                  <label htmlFor="">
                    <button onClick={() => DecrementProduct(product.id)}>-</button>
                    <span>{product.counter}</span>
                    <button onClick={() => IncrementProduct(product.id)}>+</button>
                  </label>
                </h2>
              </section>
              <footer>
                <h2>Цена: <span>{product.price}</span> $</h2>
                <button onClick={() => RemoveProduct(product.id)}>Удалить</button>
              </footer>
            </div>
          </div>})}    
        </div>
        )
}

export default ProductList;
